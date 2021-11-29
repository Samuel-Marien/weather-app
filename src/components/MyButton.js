import React, { useContext } from 'react';

import Context from './context';

import { fetchSuperWeather, getLocation } from './fecthStore';

import { BiCurrentLocation } from 'react-icons/bi';

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
    <button
      onClick={handleClick}
      className="border-2 border-gray-200 p-2 rounded shadow-lg"
    >
      <BiCurrentLocation size={25} />
    </button>
  );
};

export default MyButton;
