import { Bookable } from "../interfaces/Bookable";

export abstract class Trip implements Bookable {
    constructor(
        public destination: string,
        public price: number
    ) {}

    getSummary(): string {
        return `Ochih gazar: ${this.destination}, Une: $${this.price}`;
    }

    abstract book(): void;
    abstract cancel(): void;
    abstract getDetails(): string;
}
