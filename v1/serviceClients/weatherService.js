import axios from "axios";

const lat = 38.624576836125634;
const lon = -90.18495815951067;
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=YOUR_ID_HERE`;

export const weatherServiceClient = async () => {
  const result = await axios
    .get(url)
    .then((response) => response.data)
    .catch((err) => console.error(err));

  return result;
};
