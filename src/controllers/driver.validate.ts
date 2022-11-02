import { checkSchema } from "express-validator";
import { MultiSwapDriverValidateSchema } from "./driver.type";

export const registerSchema = checkSchema({
  fromDriverIndex: {
    in: ["body", "query"],
    errorMessage: "Invalid value",
    isInt: { options: { min: 0, max: 20 } },
  },
  toDriverIndex: {
    in: ["body", "query"],
    errorMessage: "Invalid value",
    isInt: true,
  },
} as MultiSwapDriverValidateSchema);
