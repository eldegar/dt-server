import { driversData } from "../database/db";

export function findDriverIndexById(driverId: number) {
  return driversData.findIndex((driver) => driver.id === driverId);
}

export function swapDriver(driverIndex: number) {
  driversData[driverIndex].place--;
  driversData[driverIndex - 1].place++;

  const driverStartOvertake = driversData.splice(driverIndex, 1);
  driversData.splice(driverIndex - 1, 0, driverStartOvertake[0]);
  return driversData;
}
