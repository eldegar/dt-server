import { Request, Response } from "express";
import { driversData } from "../database/db";

export function overTakeDriverController(req: Request, res: Response) {
  if (typeof req.params.driverId === "undefined") {
    res.send(404).end();
  }

  const driverIndex = driversData.findIndex(
    (driver) => driver.id === parseInt(req.params.driverId)
  );

  if (driverIndex === 0) {
    res.sendStatus(403).end();
  } else {
    swapDriver(driverIndex);
    res.send(driversData);
  }
}

function swapDriver(driverIndex: number) {
  driversData[driverIndex].place--;
  driversData[driverIndex - 1].place++;

  const driverStartOvertake = driversData.splice(driverIndex, 1);
  driversData.splice(driverIndex - 1, 0, driverStartOvertake[0]);
}
