import { Request, Response } from "express";
import { getDrivers } from "./driver.dao";

export async function listDriverController(_req: Request, res: Response) {
  res.send(await getDrivers());
}
