import { jsonDb } from "../database/jsondb";
import { MultiSwapDriverIndexes } from "./driver.type";

export async function findDriverIndexById(driverId: number) {
  return jsonDb.drivers.findIndex((driver) => driver.id === driverId);
}

export async function swapDriver(driverIndex: number) {
  jsonDb.drivers[driverIndex].place--;
  jsonDb.drivers[driverIndex - 1].place++;

  const driverStartOvertake = jsonDb.drivers.splice(driverIndex, 1);
  jsonDb.drivers.splice(driverIndex - 1, 0, driverStartOvertake[0]);
  return jsonDb.drivers;
}

export async function swapMultiDriver(driverIds: MultiSwapDriverIndexes) {
  const { fromDriverIndex, toDriverIndex } = driverIds;
  const driverStartOvertake = jsonDb.drivers.splice(fromDriverIndex, 1);

  jsonDb.drivers.splice(toDriverIndex, 0, driverStartOvertake[0]);
  jsonDb.drivers = jsonDb.setDriversPlace();
  return jsonDb.drivers;
}

export async function getDrivers() {
  return jsonDb.drivers;
}
