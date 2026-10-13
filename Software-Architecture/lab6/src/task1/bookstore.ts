import { Book } from './book';

export class BookStore {
    name: string;
    books: Book[] = [];

    constructor(name: string) {
        this.name = name;
    }

    addBook(book: Book): void {
        this.books.push(book);
        console.log(`Nemegdsen nom: "${book.title}" (${book.author.name})`);
    }

    listBooks(): void {
        console.log(`\n--- ${this.name} delguuriin nomiin jagsaalt ---`);
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. ${book.title} - Zohiolch: ${book.author.name} - Une: ${book.price}₮`);
        });
    }
}