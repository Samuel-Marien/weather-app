import React, { createContext, useState } from 'react';

export const Provider = (props) => {
  const [userValue, setUserValue] = useState('');
  const [weatherCard, setWeatherCard] = useState('');

  return (
    <Context.Provider
      {...props}
      value={{
        userValue,
        setUserValue,
        weatherCard,
        setWeatherCard
      }}
    />
  );
};

const Context = createContext();
export default Context;
