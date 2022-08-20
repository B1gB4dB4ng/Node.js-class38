import express from "express";
import { getWeather } from "./getWeather.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Welcome to the Weather App");
});

app.post("/weather", getWeather);

export default app;
