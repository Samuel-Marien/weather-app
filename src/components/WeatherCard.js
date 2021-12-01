import React, { useContext, useEffect } from 'react';

import Context from './context';

import { fetchWeather, getLocation, fetchSuperWeather } from './fecthStore';
import MyInput from './MyInput';
import MyButton from './MyButton';
import SaveButton from './SaveButton';

const WeatherCard = () => {
  const { myPosition, setMyPosition } = useContext(Context);
  const { weatherCard, setWeatherCard } = useContext(Context);
  const { userValue } = useContext(Context);

  console.log(weatherCard);

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
    <div className="flex-col">
      <div className="flex">
        <MyInput />
        <MyButton />
      </div>

      {weatherCard ? (
        <div className="flex-col">
          <div>
            <img
              src={weatherCard.current.condition.icon}
              alt={weatherCard.current.condition.text}
            />
            <div>{weatherCard.forecast.forecastday[0].day.condition.text}</div>
          </div>
          <div className="my-5">
            <div className="flex">
              <div className="text-4xl">{weatherCard.location.name}</div>
              <SaveButton city={weatherCard.location.name} />
            </div>
            <div className="text-xs">{weatherCard.location.country}</div>
          </div>
          <div>
            <div>Temp : {weatherCard.current.temp_c} °</div>
            <div>Feel like : {weatherCard.current.feelslike_c} °</div>
            <div>Humidity : {weatherCard.current.humidity} %</div>
            <div>UV : {weatherCard.current.uv}</div>
            <div>Win direction : {weatherCard.current.wind_dir}</div>
            <div>Win speed : {weatherCard.current.wind_kph} km/h</div>
            <div>
              Sunrise : {weatherCard.forecast.forecastday[0].astro.sunrise}
            </div>
            <div>
              Sunset : {weatherCard.forecast.forecastday[0].astro.sunset}
            </div>
            <div className="text-xs mt-5">
              Last updated : {weatherCard.current.last_updated}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default WeatherCard;
