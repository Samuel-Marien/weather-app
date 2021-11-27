import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

//with weatherApi.com by city name
export const fetchWeather = async (cityName) => {
  const { data } = await axios(
    `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${cityName}&days=3`
  );
  return data;
};

//with weatherApi.com by coord
export const fetchSuperWeather = async (lat, lon) => {
  const { data } = await axios(
    `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${lat},${lon}&days=3`
  );
  return data;
};

//get current position
export const getLocation = (func) => {
  //check for browser support first
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(function (position) {
      let myCurrentCoords = {
        lat: position.coords.latitude,
        lon: position.coords.longitude
      };
      func(myCurrentCoords);
      return myCurrentCoords;
    });
  } else {
    let err = new Error('No browser support for geolocation');
    return err;
  }
};
