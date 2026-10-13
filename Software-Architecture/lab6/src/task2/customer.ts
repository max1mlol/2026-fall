import { Restaurant } from './restaurant';
import { Order } from './order';

export class Customer {
    name: string;
    orders: Order[] = [];

    constructor(name: string) {
        this.name = name;
    }

    createOrder(restaurant: Restaurant): Order {
        let order = new Order(restaurant);
        this.orders.push(order);
        return order;
    }
}