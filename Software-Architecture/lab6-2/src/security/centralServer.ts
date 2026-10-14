import { AlarmSystem } from './device';
import { SecurityGuard } from './staff';
import { Room } from './room';

export class CentralServer {
    alarm: AlarmSystem;

    constructor(alarm: AlarmSystem) {
        this.alarm = alarm;
        console.log("Central server is running.");
    }

    handleThreat(room: Room, guard: SecurityGuard): void {
        // --- ASSOCIATION: Сервер, өрөө болон хамгаалагч нар бие даасан объектууд бөгөөд method-оор холбогдож байна ---
        console.log("\nThreat detected by server!");
        this.alarm.trigger();
        guard.respond(room);
    }
}