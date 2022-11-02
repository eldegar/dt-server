import { Request, Response } from "express";
import { findDriverIndexById, swapDriver } from "./driver.dao";

export async function overTakeDriverController(req: Request, res: Response) {
  if (typeof req.params.driverId === "undefined") {
    res.sendStatus(404).end();
  }

  const driverIndex = await findDriverIndexById(parseInt(req.params.driverId));

  if (driverIndex <= 0) {
    res.sendStatus(406).end();
  } else {
    res.send(await swapDriver(driverIndex));
  }
}
