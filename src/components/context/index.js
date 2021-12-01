import React, { createContext, useState } from 'react';

export const Provider = (props) => {
  const [userValue, setUserValue] = useState('london');
  const [weatherCard, setWeatherCard] = useState('');
  const [myPosition, setMyPosition] = useState({});
  const [citySave, setCitySave] = useState('');
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
        citySave,
        setCitySave,
        citySaveView,
        setCitySaveView
      }}
    />
  );
};

const Context = createContext();
export default Context;
