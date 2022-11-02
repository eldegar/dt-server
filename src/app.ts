import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.static("public"));

app.use(express.json({ limit: "1mb" }));

export default app;
