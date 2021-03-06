import React, { createContext, useState } from 'react';

export const Provider = (props) => {
  const [userValue, setUserValue] = useState('');
  const [weatherCard, setWeatherCard] = useState('');
  const [myPosition, setMyPosition] = useState({});
  const [citySaveView, setCitySaveView] = useState([]);

  return (
    <Context.Provider
      {...props}
      value={{
        userValue,
        setUserValue,
        weatherCard,
        setWeatherCard,
        myPosition,
        setMyPosition,
        citySaveView,
        setCitySaveView
      }}
    />
  );
};

const Context = createContext();
export default Context;
