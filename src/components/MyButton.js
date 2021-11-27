import React, { useContext } from 'react';

import Context from './context';

import { fetchSuperWeather, getLocation } from './fecthStore';

const MyButton = () => {
  const { myPosition, setMyPosition } = useContext(Context);
  const { setWeatherCard } = useContext(Context);

  const fectchInfo = async () => {
    //put the coords in request
    const mySuperData = await fetchSuperWeather(myPosition.lat, myPosition.lon);
    //set the state with data
    setWeatherCard(mySuperData);
  };

  const handleClick = () => {
    //catch the coords
    getLocation(setMyPosition);
    //send request
    fectchInfo();
  };

  return (
    <button onClick={handleClick} className="border-2 border-gray-800 m-10">
      Current position
    </button>
  );
};

export default MyButton;
