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
    <form onSubmit={handleSubmit}>
      <div className=" rounded flex">
        <input
          onChange={handleChange}
          placeholder="Search for a city..."
          className=" appearance-none placeholder-gray-500 border-b py-2 px-3 focus:outline-none bg-white bg-opacity-10 rounded"
        />
        <button
          type="submit"
          onClick={handleClick}
          className="ml-3"
          style={{ transform: 'translate(-50px)' }}
        >
          <FaSearchLocation size={20} />
        </button>
      </div>
    </form>
  );
};

export default MyInput;
