import { Trip } from "./abstract/Trip";
import { FlightTrip } from "./trips/FlightTrip";
import { CruiseTrip } from "./trips/CruiseTrip";
import { TrainTrip } from "./trips/TrainTrip";
import { HikingTrip } from "./trips/HikingTrip";

console.log("=== АЯЛЛЫН ЗАХИАЛГЫН СИСТЕМ ===\n");

const flight = new FlightTrip("Токио", 1200, "MIAT Mongolian Airlines");
const cruise = new CruiseTrip("Карибын арлууд", 2500, "Ocean Princess");
const train = new TrainTrip("Иркутск", 150, "№305");
const hiking = new HikingTrip("Богд хан уул", 30, "Бат-Эрдэнэ");

const trips: Trip[] = [flight, cruise, train, hiking];

trips.forEach((trip) => {
    console.log("--- Мэдээлэл ---");
    console.log(trip.getDetails());
    trip.book();
    trip.cancel();
    console.log();
});
