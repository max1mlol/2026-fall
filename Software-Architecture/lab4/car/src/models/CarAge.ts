import { Car } from './Car';

export class CarAge {
    public static getStatus(car: Car, currentYear: number = new Date().getFullYear()): string {
        const age = currentYear - car.manDate;
        if (age > 10) {
            return 'Nasjilttai';
        }
        else if (age === 1) {
            return 'Shine';
        }
        else {
            return 'On zaluu';
        }
    }
}