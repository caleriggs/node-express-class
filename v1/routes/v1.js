import { Router } from "express";
import { getUserInfo } from "./getUserInfo.js";
import { getWeatherData } from "./getWeatherData.js";
import { addWeatherUrl } from "../../middleware/addWeatherUrl.js";

const router = Router();

router.get("/userInfo", getUserInfo);
router.get("/weather", addWeatherUrl, getWeatherData);

export default router;
