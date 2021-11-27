import React, { useContext } from 'react';

import Context from './context';

const WeatherCard = () => {
  const { weatherCard } = useContext(Context);
  console.log(weatherCard);

  return (
    <div className="border border-gray-600 p-3">
      {weatherCard.lenght > 0 ? (
        <div>
          {' '}
          <p>{weatherCard.location.name}</p>
        </div>
      ) : null}
    </div>
  );
};

export default WeatherCard;
