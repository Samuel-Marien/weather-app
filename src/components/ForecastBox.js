import React, { useContext, useEffect, useState } from 'react';

import Context from './context';

import { fetchWeather, getLocation, fetchSuperWeather } from './fecthStore';

const ForecastBox = () => {
  const { myPosition, setMyPosition } = useContext(Context);
  const { weatherCard, setWeatherCard } = useContext(Context);
  const { userValue } = useContext(Context);

  useEffect(() => {
    //send the request by user value
    if (userValue) {
      //catch by cityName
      const fectchInfo = async () => {
        const myData = await fetchWeather(userValue);
        setWeatherCard(myData);
      };
      fectchInfo();
      // or send the request by current position (auto)
    } else {
      //put the coords in request
      const fectchInfo = async () => {
        const mySuperData = await fetchSuperWeather(
          myPosition.lat,
          myPosition.lon
        );
        //set the state with data
        setWeatherCard(mySuperData);
      };
      getLocation(setMyPosition);
      fectchInfo();
    }
  }, [
    myPosition.lat,
    myPosition.lon,
    setMyPosition,
    setWeatherCard,
    userValue
  ]);

  return (
    <div className="ml-5 bg-white bg-opacity-30 p-2 rounded-lg">
      <div className="flex-col justify-center border py-2 px-5 w-1/3">
        <div>{weatherCard.forecast.forecastday[0].hour[0].time.slice(11)}</div>
        <img
          src={weatherCard.forecast.forecastday[0].hour[0].condition.icon}
          alt={weatherCard.forecast.forecastday[0].hour[0].condition.text}
        />
        <div>{weatherCard.forecast.forecastday[0].hour[0].temp_c}</div>
        <div>{weatherCard.forecast.forecastday[0].hour[0].condition.text}</div>
      </div>
    </div>
  );
};

export default ForecastBox;
