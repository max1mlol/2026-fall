import { Trip } from "../abstract/Trip";

export class TrainTrip extends Trip {
    constructor(
        destination: string,
        price: number,
        public trainNumber: string
    ) {
        super(destination, price);
    }

    book(): void {
        console.log(`[Galt tereg] ${this.trainNumber} dugaartai galt teregnii zahialga khiigdlee.`);
    }

    cancel(): void {
        console.log(`[Galt tereg] ${this.trainNumber} dugaartai galt teregnii zahialga tsutslagdlaa.`);
    }

    getDetails(): string {
        return `${this.getSummary()}, Galt teregnii dugaar: ${this.trainNumber}`;
    }
}
