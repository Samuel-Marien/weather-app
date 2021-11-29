import React, { useContext, useEffect } from 'react';

import Context from './context';

import { fetchWeather, getLocation, fetchSuperWeather } from './fecthStore';
import MyInput from './MyInput';
import MyButton from './MyButton';
import SaveButton from './SaveButton';

const WeatherCard = () => {
  const { myPosition, setMyPosition } = useContext(Context);
  const { weatherCard, setWeatherCard } = useContext(Context);
  const { setCitySave } = useContext(Context);
  const { userValue } = useContext(Context);

  console.log(weatherCard);

  useEffect(() => {
    //send the request by user value
    if (userValue) {
      //catch the by cityName
      const fectchInfo = async () => {
        const myData = await fetchWeather(userValue);
        setWeatherCard(myData);
        setCitySave(myData.location.name);
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
    setCitySave,
    setMyPosition,
    setWeatherCard,
    userValue
  ]);

  return (
    <div className="w-1/3">
      <div className="border-2 border-gray-500 ">
        <div className="flex justify-between">
          <MyInput />
          <MyButton />
          <SaveButton />
        </div>

        {weatherCard ? (
          <div className="flex flex-col items-center">
            <img
              src={weatherCard.current.condition.icon}
              alt={weatherCard.current.condition.text}
            />
            <div>City name : {weatherCard.location.name}</div>
            <div>Temp : {weatherCard.current.temp_c} °</div>
            <div>Feel like : {weatherCard.current.feelslike_c} °</div>
            <div>Humidity : {weatherCard.current.humidity} %</div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default WeatherCard;
