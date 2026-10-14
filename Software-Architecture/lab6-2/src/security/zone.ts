import { Room } from './room';

export class Zone {
    zoneName: string;
    rooms: Room[] = [];

    constructor(zoneName: string) {
        this.zoneName = zoneName;
        console.log(`Zone created: ${this.zoneName}`);
    }

    addRoom(room: Room): void {
        // AGGREGATION: Өрөө нь бүсээс бие даан оршиж чадах ба гаднаас нэмэгдэж байна
        this.rooms.push(room);
        console.log(`Room ${room.roomNo} added to ${this.zoneName}`);
    }
}