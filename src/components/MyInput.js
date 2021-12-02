import React, { useContext } from 'react';

import Context from './context';

import { FaSearchLocation } from 'react-icons/fa';

let userWord = '';
const handleChange = (e) => {
  userWord = e.target.value;
};

const handleSubmit = (e) => {
  e.preventDefault();
};

const MyInput = () => {
  const { setUserValue } = useContext(Context);

  const handleClick = () => {
    setUserValue(userWord);
  };

  return (
    <div className="flex">
      <form onSubmit={handleSubmit}>
        <div className="border-2 border-gray-200 p-2 rounded w-80">
          <input onChange={handleChange} placeholder="Search for a city..." />
          <button type="submit" onClick={handleClick}>
            <FaSearchLocation size={20} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default MyInput;
