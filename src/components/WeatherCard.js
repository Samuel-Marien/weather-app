import React, { useContext, useEffect } from 'react';

import Context from './context';

import { fetchWeather, getLocation, fetchSuperWeather } from './fecthStore';
import MyInput from './MyInput';
import MyButton from './MyButton';
import SaveButton from './SaveButton';

import { RiTempColdFill, RiUserHeartLine } from 'react-icons/ri';
import { WiHumidity, WiWindDeg, WiSmallCraftAdvisory } from 'react-icons/wi';
import { BsSunglasses } from 'react-icons/bs';
import { GiSunrise, GiSunset } from 'react-icons/gi';
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

  const WeatherItem = (props) => {
    const { icon, children } = props;
    return (
      <div className="flex items-center">
        <span className="mr-1 text-xl">{icon}</span>
        {children}
      </div>
    );
  };

  return (
    <div className="flex-col">
      <div className="flex justify-between">
        <MyInput />
        <MyButton />
      </div>

      {weatherCard ? (
        <div className="flex-col w-96">
          <div className="mt-7">
            <div className="flex">
              <div className="flex">
                <span className="text-6xl">{weatherCard.location.name}</span>
                <SaveButton city={weatherCard.location.name} />
              </div>
            </div>
            <div className="text-sm">{weatherCard.location.country}</div>
          </div>
          <div>
            <img
              className="w-24"
              src={weatherCard.current.condition.icon}
              alt={weatherCard.current.condition.text}
            />
            <div>{weatherCard.forecast.forecastday[0].day.condition.text}</div>
          </div>
          <div className="mt-5">
            <WeatherItem icon={<RiTempColdFill />}>
              <span className="text-6xl">{weatherCard.current.temp_c} °</span>
              <span className="text-sm inline-flex ml-2 self-end">
                <RiUserHeartLine />
                {weatherCard.current.feelslike_c} °
              </span>
            </WeatherItem>
            <div className="mt-5 flex">
              <div className="mr-10">
                <WeatherItem icon={<WiHumidity />}>
                  {weatherCard.current.humidity} %
                </WeatherItem>
                <WeatherItem icon={<BsSunglasses />}>
                  UV : {weatherCard.current.uv} /10
                </WeatherItem>
                <WeatherItem icon={<WiWindDeg />}>
                  Win : {weatherCard.current.wind_dir}
                </WeatherItem>
              </div>
              <div>
                <WeatherItem icon={<WiSmallCraftAdvisory />}>
                  {weatherCard.current.wind_kph} km/h
                </WeatherItem>
                <WeatherItem icon={<GiSunrise />}>
                  {weatherCard.forecast.forecastday[0].astro.sunrise}
                </WeatherItem>
                <WeatherItem icon={<GiSunset />}>
                  {weatherCard.forecast.forecastday[0].astro.sunset}
                </WeatherItem>
              </div>
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
