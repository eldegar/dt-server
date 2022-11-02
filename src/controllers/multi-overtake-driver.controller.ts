import { Request, Response } from "express";
import { swapMultiDriver } from "./driver.dao";

export function multiOvertakeDriverController(req: Request, res: Response) {
  res.send(swapMultiDriver(req.body));
}
