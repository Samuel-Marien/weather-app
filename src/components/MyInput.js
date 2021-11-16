import React, { useState } from 'react';

import { fetchWeather, fetchSuperWeather } from './Playground';

let userWord = '';
const handleChange = (e) => {
  userWord = e.target.value;
};

const handleSubmit = (e) => {
  e.preventDefault();
};

const fectchInfo = async (userValue) => {
  const myData = await fetchWeather(userValue);
  const mySuperData = await fetchSuperWeather(
    myData.coord.lat,
    myData.coord.lon
  );
  console.log(mySuperData);
};

const MyInput = () => {
  const [userValue, setUserValue] = useState('');

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
