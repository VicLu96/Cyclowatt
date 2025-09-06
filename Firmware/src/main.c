// ===============================================================================================
// --- General Includes ---
// ===============================================================================================
#include <stdlib.h>
#include <stdint.h>
#include <stdbool.h>
#include <stdio.h>
#include <string.h>
#include <stddef.h>

// ===============================================================================================
// --- System-Specific Includes ---
// ===============================================================================================
#include <zephyr/types.h>
#include <zephyr/kernel.h>
#include <zephyr/device.h>
#include <zephyr/sys/printk.h>
#include <zephyr/sys/util.h>
#include <zephyr/logging/log.h>
#include <zephyr/drivers/gpio.h>
#include <zephyr/drivers/i2c.h>

#include "adc_load_cell.h"


// ===============================================================================================
// --- Log Module ---
// ===============================================================================================
LOG_MODULE_REGISTER(MAIN, LOG_LEVEL_DBG);


#define LSM6DS3_I2C_ADDR  0x6B
#define LSM6DS3_REG_WHOAMI 0x0F

#define ENABLE_5_V         17
#define ENABLE_SENSOR      3
uint8_t ret = 0; 

int main(void)
{
        uint8_t whoami = 0;

        const struct device* i2c1_dev = DEVICE_DT_GET(DT_NODELABEL(i2c0));
	const struct device* gpio_port = device_get_binding("GPIO0");
//*******************GPIO PIN Configuration*********************/
      //  gpio_port = DEVICE_DT_GET(GPIO_NODE);
        if (!device_is_ready(gpio_port)) {
                printk("Error: GPIO device not ready\n");
        }
        gpio_pin_configure(gpio_port, ENABLE_5_V, GPIO_OUTPUT_HIGH);
        gpio_pin_configure(gpio_port, ENABLE_SENSOR, GPIO_OUTPUT_HIGH);


//*******************GPIO PIN Configuration*********************/
        ret = device_is_ready(i2c1_dev);
	if(ret != true){
	        LOG_INF("I2C device is not ready, with error code:  %d\n", ret);
	}	

/***************************Init********************************/
        adc_init();

        double load_cell_readout = 0; 

        while(true){
            
                LOG_INF("Running...");
                load_cell_readout = get_thermistor_data();
                LOG_INF("Load cell %f", load_cell_readout);
                k_sleep(K_MSEC(1000));
        }
}

/*
        ret = i2c_reg_read_byte(i2c1_dev, LSM6DS3_I2C_ADDR, LSM6DS3_REG_WHOAMI, &whoami);
        if (ret < 0) {
                LOG_ERR("Failed to read WHO_AM_I: %d", ret);
        }

        LOG_INF("LSM6DS3 WHO_AM_I = 0x%02x", whoami);
        if (whoami == 0x69) {
                LOG_INF("Device detected correctly!");
        } else {
                LOG_WRN("Unexpected WHO_AM_I response: %d ", whoami);
        }

        }

*/
