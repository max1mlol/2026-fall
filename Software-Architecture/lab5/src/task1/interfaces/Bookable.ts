export interface Bookable {
    book(): void;
    cancel(): void;
    getDetails(): string;
}
