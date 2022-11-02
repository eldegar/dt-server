import { ParamSchema, Schema } from "express-validator";

export type Driver = {
  id: number;
  code: string;
  firstname: string;
  lastname: string;
  country: string;
  team: string;
  imgUrl: string;
  place: number;
};

export type MultiSwapDriverIndexes = {
  fromDriverIndex: number;
  toDriverIndex: number;
};

export type MultiSwapDriverValidateSchema = Partial<{
  [P in keyof MultiSwapDriverIndexes]: ParamSchema;
}> &
  Schema;
