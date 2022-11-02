import express from "express";
import { listDriverController } from "./list-driver.controller";
import { multiOvertakeDriverController } from "./multi-overtake-driver.controller";
import { overTakeDriverController } from "./overtake-driver.controller";

export const driverRouter = express.Router();

driverRouter.get("/", listDriverController);
driverRouter.post("/:driverId/overtake", overTakeDriverController);
driverRouter.post("/multi-overtake", multiOvertakeDriverController);
