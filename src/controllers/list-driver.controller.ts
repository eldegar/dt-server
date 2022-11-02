import { Request, Response } from "express";
import { getDrivers } from "./driver.dao";

export function listDriverController(_req: Request, res: Response) {
  res.send(getDrivers());
}
