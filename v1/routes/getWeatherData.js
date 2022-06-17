import { weatherServiceClient } from "../serviceClients/weatherService.js";

export const getWeatherData = async (req, res) => {
  const weatherUrl = req.query.weatherUrl;
  const weatherData = await weatherServiceClient(weatherUrl);
  console.log("weather data: ", weatherData);
  res.json(weatherData);
};
