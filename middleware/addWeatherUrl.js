export const addWeatherUrl = (req, res, next) => {
  const lat = 38.624576836125634;
  const lon = -90.18495815951067;
  const baseUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}`;

  req.url = `${baseUrl}&appid=3790dc45273698a12e774374079ac64f`;
  next();
};
