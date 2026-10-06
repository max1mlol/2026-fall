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
        console.log(`[Нислэг] ${this.airline} компанийн ${this.destination} чиглэлийн аялал захиалагдлаа.`);
    }

    cancel(): void {
        console.log(`[Нислэг] ${this.airline} компанийн ${this.destination} чиглэлийн захиалга цуцлагдлаа.`);
    }

    getDetails(): string {
        return `${this.getSummary()}, Нисэх компани: ${this.airline}`;
    }
}
