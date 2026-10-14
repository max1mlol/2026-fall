import { Room } from './room';
import { Sensor } from './device';

export class SecurityGuard {  // <-- export байгаа эсэх
    name: string;
    zone: string;

    constructor(name: string, zone: string) {
        this.name = name;
        this.zone = zone;
        console.log(`Security guard assigned: ${this.name} (${this.zone})`);
    }

    respond(room: Room): void {
        console.log(`Guard ${this.name} is heading to Room ${room.roomNo}!`);
    }
}

export class ServiceEngineer { // <-- export байгаа эсэх
    name: string;

    constructor(name: string) {
        this.name = name;
        console.log(`Service engineer ready: ${this.name}`);
    }

    repair(sensor: Sensor): void {
        console.log(`Engineer ${this.name} is fixing sensor ${sensor.id}`);
    }
}