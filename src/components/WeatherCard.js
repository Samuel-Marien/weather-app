import React, { useContext, useEffect } from 'react';

import Context from './context';

import { fetchWeather, getLocation, fetchSuperWeather } from './fecthStore';
import MyInput from './MyInput';
import MyButton from './MyButton';

const WeatherCard = () => {
  const { myPosition, setMyPosition } = useContext(Context);
  const { weatherCard, setWeatherCard } = useContext(Context);
  const { userValue } = useContext(Context);
  console.log(weatherCard);

  useEffect(() => {
    //send the request by user value
    if (userValue) {
      //catch the by cityName
      const fectchInfo = async () => {
        const myData = await fetchWeather(userValue);
        setWeatherCard(myData);
      };
      fectchInfo();
      // or send the request by current position (auto)
    } else {
      const fectchInfo = async () => {
        //put the coords in request
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
    <div>
      <MyInput />
      {weatherCard ? (
        <div className="">
          <div>City name : {weatherCard.location.name}</div>
          <div>Temp : {weatherCard.current.temp_c} °</div>
          <div>Feel like : {weatherCard.current.feelslike_c} °</div>
          <div>Humidity : {weatherCard.current.humidity} %</div>
        </div>
      ) : null}
      <MyButton />
    </div>
  );
};

export default WeatherCard;
