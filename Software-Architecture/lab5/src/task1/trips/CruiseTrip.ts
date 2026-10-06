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
        console.log(`[Далайн аялал] ${this.shipName} хөлөг онгоцоор ${this.destination} хүрэх аялал захиалагдлаа.`);
    }

    cancel(): void {
        console.log(`[Далайн аялал] ${this.shipName} хөлөг онгоцны захиалга цуцлагдлаа.`);
    }

    getDetails(): string {
        return `${this.getSummary()}, Хөлөг онгоц: ${this.shipName}`;
    }
}
