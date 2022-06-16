import env from "../env.json";

export const addWeatherUrl = (req, res, next) => {
  const lat = 38.624576836125634;
  const lon = -90.18495815951067;
  const baseUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}`;
  const apiKey = env.apiKey;
};
