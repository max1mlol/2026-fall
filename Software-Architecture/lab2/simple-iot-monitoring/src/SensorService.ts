import { TemperatureSensor } from "./TemperatureSensor";
import { HumiditySensor } from "./HumiditySensor";
import { AirQualitySensor } from "./AirQualitySensor";
export class SensorService {
    constructor(
        private temperatureSensor: TemperatureSensor,
        private humiditySensor: HumiditySensor,
        private airQualitySensor: AirQualitySensor
    ) {}

    getTemperature(): number {
        return this.temperatureSensor.readTemperature();
    }

    getHumidity(): number {
        return this.humiditySensor.readHumidity();
    }

    getAirQuality(): number {
        return this.airQualitySensor.readAirQuality();
    }
}