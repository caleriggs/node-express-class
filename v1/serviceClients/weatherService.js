import axios from "axios";

export const weatherServiceClient = async (url) => {
  const result = await axios
    .get(url)
    .then((response) => response.data)
    .catch((err) => console.error(err));

  return result;
};
