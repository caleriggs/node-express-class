import express from "express";
import cors from "cors";
import { weatherServiceClient } from "./v1/serviceClients/weatherService.js";

const app = express();
const port = 1138;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("OK"));

app.get("/weather", async (req, res) => {
  const weatherData = await weatherServiceClient();
  console.log("weather data: ", weatherData);
  res.json(weatherData);
});

app.listen(port, () =>
  console.log("App listening on : ", `http://localhost:${port}`)
);
