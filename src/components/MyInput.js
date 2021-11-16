import React, { useContext } from 'react';

import Context from './context';

import { fetchWeather, fetchSuperWeather, fetchPollution } from './fecthStore';

let userWord = '';
const handleChange = (e) => {
  userWord = e.target.value;
};

const handleSubmit = (e) => {
  e.preventDefault();
};

const MyInput = () => {
  const { userValue, setUserValue } = useContext(Context);
  const { setWeatherCard } = useContext(Context);

  const fectchInfo = async (userValue) => {
    //catch the coords
    const myData = await fetchWeather(userValue);
    //put the coords in request
    const mySuperData = await fetchSuperWeather(
      myData.coord.lat,
      myData.coord.lon
    );
    //set the state with data
    setWeatherCard(mySuperData);
    //pollution
    const myPollutionData = await fetchPollution(
      myData.coord.lat,
      myData.coord.lon
    );
    console.log(myPollutionData);
  };

  const handleClick = () => {
    setUserValue(userWord);
    fectchInfo(userWord);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input onChange={handleChange} placeholder="Search for a city..." />
          <button type="submit" onClick={handleClick}></button>
        </div>
      </form>
      <p>You selected : {userValue}</p>
    </div>
  );
};

export default MyInput;
