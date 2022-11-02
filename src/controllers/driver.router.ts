import express, { NextFunction, Request, Response } from "express";
import { driversData } from "../database/db";

export const driverRouter = express.Router();

driverRouter.get("/", (_req: Request, res: Response, next: NextFunction) => {
  try {
    res.send(driversData);
  } catch (error) {
    next(error);
  }
});

driverRouter.post("/:driverId/overtake", (req: Request, res: Response) => {
  if (!req.params.driverId) {
    res.send(404);
  }

  const driverIndex = driversData.findIndex(
    (driver) => driver.id === parseInt(req.params.driverId)
  );

  if (driverIndex === 0) {
    res.sendStatus(403);
  }

  driversData[driverIndex].place--;
  driversData[driverIndex - 1].place++;

  const driverStartOvertake = driversData.splice(driverIndex, 1);
  driversData.splice(driverIndex - 1, 0, driverStartOvertake[0]);
  res.send(driversData);
});
