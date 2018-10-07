import axios from 'axios';
import {WEATHER_API_KEY} from '../config/weather';
import {FETCH_WEATHER} from '../constants';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_API_KEY}`;

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  console.log('Request:', request);
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}

