import fs from "fs";
import { Driver } from "src/controllers/driver.type";
let rawdata = fs.readFileSync("data/drivers.json");
const driversRawData = JSON.parse(rawdata.toString());

shuffleArray(driversRawData);

export const driversData = setDriversImage(setDriversPlace(driversRawData));

function setDriversPlace(drivers: Driver[]) {
  return drivers.map((driver, idx) => ({ ...driver, place: idx + 1 }));
}

function setDriversImage(drivers: Driver[]) {
  return drivers.map((driver) => ({
    ...driver,
    imgUrl: `/static/${driver.code}.png`.toLowerCase(),
  }));
}
