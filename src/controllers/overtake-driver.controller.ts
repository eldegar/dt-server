import { Request, Response } from "express";
import { findDriverIndexById, swapDriver } from "./driver.dao";

export function overTakeDriverController(req: Request, res: Response) {
  if (typeof req.params.driverId === "undefined") {
    res.send(404).end();
  }

  const driverIndex = findDriverIndexById(parseInt(req.params.driverId));

  if (driverIndex === 0) {
    res.sendStatus(403).end();
  } else {
    res.send(swapDriver(driverIndex));
  }
}
