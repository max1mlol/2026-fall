import { Trip } from "../abstract/Trip";

export class FlightTrip extends Trip {
    constructor(
        destination: string,
        price: number,
        public airline: string
    ) {
        super(destination, price);
    }

    book(): void {
        console.log(`[Nisleg] ${this.airline} company-n ${this.destination} chigleliin aylal zahialagdlaa.`);
    }

    cancel(): void {
        console.log(`[Nisleg] ${this.airline} company-n ${this.destination} chigleliin zahialga tsutslagdlaa.`);
    }

    getDetails(): string {
        return `${this.getSummary()}, Niseh company: ${this.airline}`;
    }
}
