import { EventEmitter } from 'events';
import { cart, Item } from './data';

class CartEvents extends EventEmitter {}
const bus = new CartEvents();

// Хэрэглэх
bus.on('ITEM_ADDED', (it: Item) => console.log('Нэмэгдсэн:', it.name));
bus.on('CHECKOUT', (total: number) => console.log('Нийт checkout:', total));
bus.on('ITEM_REMOVED', (it: Item) => console.log('Хасагдсан: ', it.name));
// энгийн cart “модуль”
let items: Item[] = [...cart];

function addItem(it: Item) {
    items = [...items, it];
    bus.emit('ITEM_ADDED', it);
}
function removeItem(it: Item) {
    items = items.filter(i => i !== it);
    bus.emit('ITEM_REMOVED', it);
}
function checkout() {
    const total = items.reduce((s, i) => s + i.price * i.qty, 0);
    bus.emit('CHECKOUT', total);
    return total;
}
// ажиллуулах
addItem({ name: 'Chocolate', price: 4200, qty: 3, category: 'food' });
removeItem({ name: 'Chocolate', price: 4200, qty: 3, category: 'food' });
checkout();