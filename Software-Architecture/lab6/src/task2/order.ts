import { Restaurant } from './restaurant';
import { FoodItem } from './foodItem';

export class Order {
    restaurant: Restaurant;
    items: FoodItem[] = [];

    constructor(restaurant: Restaurant) {
        this.restaurant = restaurant;
    }

    addItem(food: FoodItem): void {
        this.items.push(food);
    }

    getTotalPrice(): number {
        return this.items.reduce((total, item) => total + item.price, 0);
    }
}