import React, { createContext, useState } from 'react';

export const Provider = (props) => {
  const [userValue, setUserValue] = useState('');
  const [weatherCard, setWeatherCard] = useState({});
  const [myPosition, setMyPosition] = useState({
    lat: 48.87917,
    lon: 2.594222
  });

  return (
    <Context.Provider
      {...props}
      value={{
        userValue,
        setUserValue,
        weatherCard,
        setWeatherCard,
        myPosition,
        setMyPosition
      }}
    />
  );
};

const Context = createContext();
export default Context;
