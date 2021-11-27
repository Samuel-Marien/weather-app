import React, { useContext } from 'react';

import Context from './context';

import { fetchSuperWeather } from './fecthStore';

const MyButton = () => {
  const { myPosition, setMyPosition } = useContext(Context);
  const { setWeatherCard } = useContext(Context);

  const getLocation = () => {
    //check for browser support first
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        let myCurrentCoords = {
          lat: position.coords.latitude,
          lon: position.coords.longitude
        };
        // console.log(myCurrentCoords);
        setMyPosition(myCurrentCoords);
        return myCurrentCoords;
      });
    } else {
      let err = new Error('No browser support for geolocation');
      return Promise.reject(err);
    }
  };

  const fectchInfo = async () => {
    //put the coords in request
    const mySuperData = await fetchSuperWeather(myPosition.lat, myPosition.lon);
    //set the state with data
    setWeatherCard(mySuperData);
  };

  // console.log(myPosition);

  const handleClick = () => {
    //catch the coords
    getLocation();
    fectchInfo();
  };
  return (
    <button onClick={handleClick} className="border-2 border-gray-800 m-10">
      Current position
    </button>
  );
};

export default MyButton;
