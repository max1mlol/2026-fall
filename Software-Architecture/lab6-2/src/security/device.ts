export class Sensor {
    id: string;
    type: string;

    constructor(id: string, type: string) {
        this.id = id;
        this.type = type;
        console.log(`Sensor added: ${this.type} (${this.id})`);
    }
}

export class Camera {
    id: string;
    resolution: string;

    constructor(id: string, resolution: string) {
        this.id = id;
        this.resolution = resolution;
        console.log(`Camera added: ${this.id}`);
    }
}

export class AlarmSystem {
    status: boolean = false;

    trigger(): void {
        this.status = true;
        console.log("Alarm triggered: Emergency in the building!");
    }
}