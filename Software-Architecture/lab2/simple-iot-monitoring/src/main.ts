import { Display } from "./Display";
import { HumiditySensor } from "./HumiditySensor";
import { SensorService } from "./SensorService";
import { TemperatureSensor } from "./TemperatureSensor";
import { AirQualitySensor } from "./AirQualitySensor";
const temperatureSensor = new TemperatureSensor();
const humiditySensor = new HumiditySensor();
const airQualitySensor = new AirQualitySensor();
const service = new SensorService(
    temperatureSensor,
    humiditySensor,
    airQualitySensor
);
const display = new Display();

display.showTemperature(service.getTemperature());
display.showHumidity(service.getHumidity());
display.showAirQuality(service.getAirQuality());