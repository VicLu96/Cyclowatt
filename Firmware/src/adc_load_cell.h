#include <zephyr/kernel.h>
#include <zephyr/device.h>
#include <zephyr/drivers/sensor.h>
#include <zephyr/logging/log.h>
#include <zephyr/drivers/i2c.h>

// ADC includes
#include <nrfx_saadc.h>
#include <zephyr/drivers/adc.h>

#include <zephyr/devicetree.h>
#include <zephyr/sys/util.h>
#include <math.h>

void adc_init(void);
double get_thermistor_data(void);