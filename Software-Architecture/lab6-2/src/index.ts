import { Building } from './security/building';
import { Zone } from './security/zone';
import { Room } from './security/room';
import { AlarmSystem } from './security/device';
import { SecurityGuard, ServiceEngineer } from './security/staff';
import { CentralServer } from './security/centralServer';

console.log("=== SYSTEM START ===");

// Building setup
const building = new Building("IT Park");
const zone = new Zone("Floor 2");
const room = new Room("204");

building.addZone(zone);
zone.addRoom(room);

console.log("\n--- STAFF & SERVER ---");
const alarm = new AlarmSystem();
const server = new CentralServer(alarm);
const guard = new SecurityGuard("Ankhbayar", "Floor 2");
const engineer = new ServiceEngineer("Tuguldur");

// Test actions
server.handleThreat(room, guard);
engineer.repair(room.sensors[0]);

console.log("=== SYSTEM END ===");