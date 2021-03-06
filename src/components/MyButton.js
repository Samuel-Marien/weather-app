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
      className="delay-75 duration-100 transform hover:scale-125 hover:text-blue-700 transition ease-linear "
    >
      <BiCurrentLocation size={25} />
    </button>
  );
};

export default MyButton;
