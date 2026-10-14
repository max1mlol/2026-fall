import { Sensor, Camera } from './device';

export class Room {
    roomNo: string;
    sensors: Sensor[] = [];
    cameras: Camera[] = [];

    constructor(roomNo: string) {
        this.roomNo = roomNo;
        console.log(`Room ${this.roomNo} created.`);
        
        // Composition: Өрөөтэй хамт мэдрэгч, камер шууд үүснэ
        this.sensors.push(new Sensor(`${roomNo}-S1`, "Motion Detector"));
        this.cameras.push(new Camera(`${roomNo}-C1`, "HD"));
    }
}