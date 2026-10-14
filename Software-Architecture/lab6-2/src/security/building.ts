import { Zone } from './zone';

export class Building {
    buildingName: string;
    zones: Zone[] = [];

    constructor(buildingName: string) {
        this.buildingName = buildingName;
        console.log(`Building created: ${this.buildingName}`);
    }

    addZone(zone: Zone): void {
        this.zones.push(zone);
        console.log(`Zone ${zone.zoneName} added to building.`);
    }
}