import axios from "axios";
import { apiKey } from "../../env.js";

const lat = 38.624576836125634;
const lon = -90.18495815951067;
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

export const weatherServiceClient = async () => {
  const result = await axios
    .get(url)
    .then((response) => response.data)
    .catch((err) => console.error(err));

  return result;
};
