import axios from "axios";
import { WEATHER_API_KEY } from "../config/weather";
import { FETCH_WEATHER, FETCH_WEATHER_ERROR } from "../constants";
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_API_KEY}`;

function fetchWeatherSuccess(response) {
  console.log("Response:", response);
  return {
    type: FETCH_WEATHER,
    payload: response
  };
}

function fetchWeatherError(error) {
  return {
    type: FETCH_WEATHER_ERROR,
    payload: error
  };
}

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  return function(dispatch) {
    axios
      .get(url)
      .then(response => {
        dispatch(fetchWeatherSuccess(response));
      })
      .catch(error => {
        dispatch(fetchWeatherError(error));
      });
  };
}
