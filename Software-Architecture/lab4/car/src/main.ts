import { Car } from './models/Car';
import { CarAge } from './models/CarAge';

const currentYear = 2026;

const cars: Car[] = [
    new Car('Toyota Prius', 'Grey', 2010),
    new Car('Toyota Highlander', 'Blue', 2020),
    new Car('Bugatti Chiron', 'Silver', 2025)
];

console.log('Mashini Nasjilt: ');
cars.forEach(car => {
    const status = CarAge.getStatus(car, currentYear);
    console.log(`Model: ${car.model} | Color: ${car.color} | Manufactured Date: ${car.manDate} | Төлөв: ${status}`);
});