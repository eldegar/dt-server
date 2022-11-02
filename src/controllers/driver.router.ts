import express, { NextFunction, Request, Response } from "express";
import { driversData } from "../database/db";
import { overTakeDriverController } from "./overtake-driver.controller";

export const driverRouter = express.Router();

driverRouter.get("/", (_req: Request, res: Response, next: NextFunction) => {
  try {
    res.send(driversData);
  } catch (error) {
    next(error);
  }
});

driverRouter.post("/:driverId/overtake", overTakeDriverController);
