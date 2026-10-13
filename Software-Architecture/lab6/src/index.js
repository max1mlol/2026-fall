import { Author } from './task1/author';
import { Book } from './task1/book';
import { BookStore } from './task1/bookstore';

import { FoodItem } from './task2/foodItem';
import { Restaurant } from './task2/restaurant';
import { Customer } from './task2/customer';

// --- DAALGAVAR 1: Nomnii Delguuriin Sistem ---
console.log("=== DAALGAVAR 1: NOMIIN DELGUURIIN SISTEM ===");
const author1 = new Author("Ts. Damdinsuren");
const book1 = new Book("Gol duriin tuuj", 25000, author1);

const store = new BookStore("Internom");
store.addBook(book1);
store.listBooks();

// --- DAALGAVAR 2: Restoranii Zahialgiin Sistem ---
console.log("\n=== DAALGAVAR 2: RESTAURANT ZAHIALGIIN SYSTEM ===");
const restaurant = new Restaurant("Khan Buuz");
const food1 = new FoodItem("Khuushur", 4000);
const food2 = new FoodItem("Buuz", 5000);
restaurant.addFoodToMenu(food1);
restaurant.addFoodToMenu(food2);

const customer = new Customer("Temuulen");
const order = customer.createOrder(restaurant);
order.addItem(food1);
order.addItem(food2);

console.log(`Uilchluulegch: ${customer.name}`);
console.log(`Restaurant: ${order.restaurant.name}`);
console.log(`Niit tulukh dun: ${order.getTotalPrice()}₮`);