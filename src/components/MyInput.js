import React, { useContext } from 'react';

import Context from './context';

import { fetchWeather } from './fecthStore';

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

  //catch the by cityName
  const fectchInfo = async (userValue) => {
    const myData = await fetchWeather(userValue);
    setWeatherCard(myData);
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
