import { Author } from './author';

export class Book {
    title: string;
    price: number;
    author: Author;

    constructor(title: string, price: number, author: Author) {
        this.title = title;
        this.price = price;
        this.author = author;
    }
}