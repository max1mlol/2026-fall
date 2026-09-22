export class Display {
    showTemperature(value: number): void {
        console.log("Temperature: " + value + "°C");
    }
    showHumidity(value: number): void {
        console.log("Humidity: " + value + "%");
    }
    showAirQuality(value: number): void {
        console.log("Air Quality Index: " + value);
    }
}