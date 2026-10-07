import { Trip } from "./abstract/Trip";
import { FlightTrip } from "./trips/FlightTrip";
import { CruiseTrip } from "./trips/CruiseTrip";
import { TrainTrip } from "./trips/TrainTrip";
import { HikingTrip } from "./trips/HikingTrip";

console.log("=== AYLAL ZAHIALAH SYSTEM ===\n");

const flight = new FlightTrip("Tokyo", 1200, "MIAT Mongolian Airlines");
const cruise = new CruiseTrip("Carribean Arluud", 2500, "Ocean Princess");
const train = new TrainTrip("Irkutsk", 150, "No305");
const hiking = new HikingTrip("Bogd Khan Uul", 30, "Bat-Erdene");

const trips: Trip[] = [flight, cruise, train, hiking];

trips.forEach((trip) => {
    console.log("--- Medeelel ---");
    console.log(trip.getDetails());
    trip.book();
    trip.cancel();
    console.log();
});
