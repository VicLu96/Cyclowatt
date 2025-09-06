#include "adc_load_cell.h"

LOG_MODULE_REGISTER(ADC_LOAD_CELL, LOG_LEVEL_DBG);


#define NRFX_SAADC_ENABLED 1
#define SAADC_ENABLED 1

// begin ADC checks
#if !DT_NODE_EXISTS(DT_PATH(zephyr_user)) || \
	!DT_NODE_HAS_PROP(DT_PATH(zephyr_user), io_channels)
#endif

#define DT_SPEC_AND_COMMA(node_id, prop, idx) \
ADC_DT_SPEC_GET_BY_IDX(node_id, idx),
/*ADC Voltage reading*/
/* Data of ADC io-channels specified in devicetree. */
static const struct adc_dt_spec adc_channels[] = {
	DT_FOREACH_PROP_ELEM(DT_PATH(zephyr_user), io_channels,
			     DT_SPEC_AND_COMMA)
};

void adc_init(void){
	int err;

	/* Configure channels individually prior to sampling. */
	for (size_t i = 0U; i < ARRAY_SIZE(adc_channels); i++) {
		if (!device_is_ready(adc_channels[i].dev)) {
			printk("ADC controller device %s not ready\n", adc_channels[i].dev->name);
			return;
		}

		err = adc_channel_setup_dt(&adc_channels[i]);
		if (err < 0) {
			printk("Could not setup adc channel #%d (%d)\n", i, err);
			return;
		}
	}
	return;
}

// gets thermistor temperature and writes it into the sensor_data struct by using adc and LUT
// If the temperature is out of the range covered in the LUT, a very large value gets returned to make clear that it's an unrealistic value - this is the case e.g. if the thermistor is not connected
double get_thermistor_data(void){
	int err;
	uint16_t buf;
	struct adc_sequence sequence = {
		.buffer = &buf,
		/* buffer size in bytes, not number of samples */
		.buffer_size = sizeof(buf),
	};

	(void)adc_sequence_init_dt(&adc_channels[0], &sequence);

	err = adc_read(adc_channels[0].dev, &sequence);
	if (err < 0) {
		printk("Could not read using adc_read() (%d)\n", err);
	}

	/*
	* If using differential mode, the 16 bit value
	* in the ADC sample buffer should be a signed 2's
	* complement value.
	*/
	int32_t val_raw;
	if (adc_channels[0].channel_cfg.differential) {
		val_raw = (int32_t)((int16_t)buf);
	} else {
		val_raw = (int32_t)buf;
	}

	int32_t val_mv = val_raw;
	err = adc_raw_to_millivolts_dt(&adc_channels[0], &val_mv);
	if (err < 0) {
		printk(" (value in mV not available)\n");
	}
	val_raw = (int32_t)(((val_mv*4096)/(3300)));

	return val_raw; 
}