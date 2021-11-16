import React, { useContext } from 'react';

import Context from './context';

const WeatherCard = () => {
  const { weatherCard } = useContext(Context);
  console.log(weatherCard);

  return (
    <div className="border border-gray-600 p-3">
      <p>{weatherCard.timezone}</p>
      <p>Humidity : {weatherCard.current.humidity}</p>
      <p>Temp : {weatherCard.current.temp}</p>
    </div>
  );
};

export default WeatherCard;
