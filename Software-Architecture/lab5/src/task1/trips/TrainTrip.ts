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
        console.log(`[Галт тэрэг] ${this.trainNumber} дугаартай галт тэрэгний захиалга хийгдлээ.`);
    }

    cancel(): void {
        console.log(`[Галт тэрэг] ${this.trainNumber} дугаартай галт тэрэгний захиалга цуцлагдлаа.`);
    }

    getDetails(): string {
        return `${this.getSummary()}, Галт тэрэгний дугаар: ${this.trainNumber}`;
    }
}
