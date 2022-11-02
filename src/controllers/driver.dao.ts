import { jsonDb } from "../database/jsondb";

export function findDriverIndexById(driverId: number) {
  return jsonDb.drivers.findIndex((driver) => driver.id === driverId);
}

export function swapDriver(driverIndex: number) {
  jsonDb.drivers[driverIndex].place--;
  jsonDb.drivers[driverIndex - 1].place++;

  const driverStartOvertake = jsonDb.drivers.splice(driverIndex, 1);
  jsonDb.drivers.splice(driverIndex - 1, 0, driverStartOvertake[0]);
  return jsonDb.drivers;
}

export function getDrivers() {
  return jsonDb.drivers;
}
