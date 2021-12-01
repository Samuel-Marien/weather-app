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

  // console.log(weatherCard);

  useEffect(() => {
    //send the request by user value
    if (userValue) {
      //catch by cityName
      const fectchInfo = async () => {
        const myData = await fetchWeather(userValue);
        setWeatherCard(myData);
        setCitySave(myData.location.name);
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
    setCitySave,
    setMyPosition,
    setWeatherCard,
    userValue
  ]);

  return (
    <div className="mr-5">
      <div className="border border-gray-500 ">
        <div className="flex justify-between">
          <MyInput />
          <MyButton />
        </div>

        {weatherCard ? (
          <div className="flex flex-col items-center">
            <img
              src={weatherCard.current.condition.icon}
              alt={weatherCard.current.condition.text}
            />
            <div className="flex">
              <div className="text-4xl">{weatherCard.location.name}</div>
              <SaveButton />
            </div>
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
