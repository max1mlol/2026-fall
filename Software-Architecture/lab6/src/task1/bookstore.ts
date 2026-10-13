import { Book } from './book';

export class BookStore {
    name: string;
    books: Book[] = [];

    constructor(name: string) {
        this.name = name;
    }

    addBook(book: Book): void {
        this.books.push(book);
        console.log(`Нэмэгдсэн ном: "${book.title}" (${book.author.name})`);
    }

    listBooks(): void {
        console.log(`\n--- ${this.name} дэлгүүрийн номын жагсаалт ---`);
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. ${book.title} - Зохиолч: ${book.author.name} - Үнэ: ${book.price}₮`);
        });
    }
}