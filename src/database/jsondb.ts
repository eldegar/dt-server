import fs from "fs";
import { Driver } from "../controllers/driver.type";
import { shuffleArray } from "../utils/helper";

class JsonDB {
  private _drivers: Driver[];
  constructor() {
    let rawdata = fs.readFileSync("data/drivers.json");
    const driversRawData = JSON.parse(rawdata.toString());
    shuffleArray(driversRawData);
    this._drivers = driversRawData;
    this._drivers = this.setDriversImage();

    this._drivers = this.setDriversPlace();
  }

  public get drivers(): Driver[] {
    return this._drivers;
  }

  public set drivers(v: Driver[]) {
    this._drivers = v;
  }

  setDriversPlace() {
    return this._drivers.map((driver, idx) => ({ ...driver, place: idx + 1 }));
  }

  private setDriversImage() {
    return this._drivers.map((driver) => ({
      ...driver,
      imgUrl: `/static/${driver.code}.png`.toLowerCase(),
    }));
  }
}
export const jsonDb = new JsonDB();
