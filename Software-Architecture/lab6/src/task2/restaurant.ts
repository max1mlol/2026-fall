import { FoodItem } from './foodItem';

export class Restaurant {
    name: string;
    menu: FoodItem[] = [];

    constructor(name: string) {
        this.name = name;
    }

    addFoodToMenu(food: FoodItem): void {
        this.menu.push(food);
    }
}