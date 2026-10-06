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
        console.log(`[Явган аялал] Хөтөч ${this.guideName}-тэй ${this.destination} аялал захиалагдлаа.`);
    }

    cancel(): void {
        console.log(`[Явган аялал] ${this.destination} аяллын захиалга цуцлагдлаа.`);
    }

    getDetails(): string {
        return `${this.getSummary()}, Аяллын хөтөч: ${this.guideName}`;
    }
}
