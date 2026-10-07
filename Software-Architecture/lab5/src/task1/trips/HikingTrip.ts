import { Trip } from "../abstract/Trip";

export class HikingTrip extends Trip {
    constructor(
        destination: string,
        price: number,
        public guideName: string
    ) {
        super(destination, price);
    }

    book(): void {
        console.log(`[Yvgan aylal] Khutuch ${this.guideName}-tei ${this.destination} aylal zahialagdlaa.`);
    }

    cancel(): void {
        console.log(`[Yvgan aylal] ${this.destination} aylaliin zahialga tsutslagdlaa.`);
    }

    getDetails(): string {
        return `${this.getSummary()}, Aylaliin khutuch: ${this.guideName}`;
    }
}
