import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { driverRouter } from "./controllers/driver.router";
import { logRequest } from "./middleware/log-request";

dotenv.config();
const app = express();
app.use(express.static("public"));
app.use(cors());
app.use(logRequest);

app.use(express.json({ limit: "1mb" }));
app.use("/api/drivers", driverRouter);

export default app;
