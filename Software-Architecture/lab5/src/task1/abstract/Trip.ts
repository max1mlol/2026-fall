import { Bookable } from "../interfaces/Bookable";

export abstract class Trip implements Bookable {
    constructor(
        public destination: string,
        public price: number
    ) {}

    // Common method
    getSummary(): string {
        return `Очих газар: ${this.destination}, Үнэ: $${this.price}`;
    }

    // Abstract methods
    abstract book(): void;
    abstract cancel(): void;
    abstract getDetails(): string;
}
