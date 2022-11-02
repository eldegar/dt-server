import { Request, Response } from "express";
import { swapMultiDriver } from "./driver.dao";

export async function multiOvertakeDriverController(
  req: Request,
  res: Response
) {
  res.send(await swapMultiDriver(req.body));
}
