import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

// fetch the api by city name
export const fetchWeather = async (cityName) => {
  const { data } = await axios(
    `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
  );
  return data;
};

// fetch the api by coords
export const fetchSuperWeather = async (lat, lon) => {
  const { data } = await axios(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${API_KEY}`
  );
  return data;
};

// fetch the api by coords for air pollution stats
export const fetchPollution = async (lat, lon) => {
  const { data } = await axios(
    `http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  );
  return data;
};
