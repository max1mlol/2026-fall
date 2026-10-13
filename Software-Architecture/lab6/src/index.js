"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const author_1 = require("./task1/author");
const book_1 = require("./task1/book");
const bookstore_1 = require("./task1/bookstore");
const foodItem_1 = require("./task2/foodItem");
const restaurant_1 = require("./task2/restaurant");
const customer_1 = require("./task2/customer");
// --- ДААЛГАВАР 1: Туршилт ---
console.log("=== ДААЛГАВАР 1: НОМЫН ДЭЛГҮҮРИЙН СИСТЕМ ===");
const author1 = new author_1.Author("Ц.Дамдинсүрэн");
const book1 = new book_1.Book("Гол дүрийн тууж", 25000, author1);
const store = new bookstore_1.BookStore("Интерном");
store.addBook(book1);
store.listBooks();
// --- ДААЛГАВАР 2: Туршилт ---
console.log("\n=== DAALGAVAR 2: RESTAURANT ZAHIALGIIN SYSTEM ===");
const restaurant = new restaurant_1.Restaurant("Khan Buuz");
const food1 = new foodItem_1.FoodItem("Khuushur", 4000);
const food2 = new foodItem_1.FoodItem("Buuz", 5000);
restaurant.addFoodToMenu(food1);
restaurant.addFoodToMenu(food2);
const customer = new customer_1.Customer("Temuulen");
const order = customer.createOrder(restaurant);
order.addItem(food1);
order.addItem(food2);
console.log(`Uilchluulegch: ${customer.name}`);
console.log(`Restaurant: ${order.restaurant.name}`);
console.log(`Niit tulukh dun: ${order.getTotalPrice()}₮`);
//# sourceMappingURL=index.js.map