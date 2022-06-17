import { readFileSync } from "fs";

export const getUserInfo = (req, res) => {
  try {
    const userData = readFileSync("database/userData.json");
    const parsedData = JSON.parse(userData);

    res.status(200);
    res.json(parsedData);
  } catch (error) {
    console.error("Error getting user data: ", error);
    res.status(500);
    res.json({ error: true, message: error });
  }
};
