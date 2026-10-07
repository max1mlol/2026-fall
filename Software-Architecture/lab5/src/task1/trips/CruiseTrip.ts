import { Trip } from "../abstract/Trip";

export class CruiseTrip extends Trip {
    constructor(
        destination: string,
        price: number,
        public shipName: string
    ) {
        super(destination, price);
    }

    book(): void {
        console.log(`[Dalain Aylal] ${this.shipName} hulug ongotsoor ${this.destination} hureh aylal zahialagdlaa.`);
    }

    cancel(): void {
        console.log(`[Dalain aylal] ${this.shipName} hulug ongotsnii zahialga tsutslagdlaa.`);
    }

    getDetails(): string {
        return `${this.getSummary()}, Hulug ongots: ${this.shipName}`;
    }
}
