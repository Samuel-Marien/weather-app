import React, { useContext } from 'react';

import Context from './context';

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
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input onChange={handleChange} placeholder="Search for a city..." />
          <button type="submit" onClick={handleClick}></button>
        </div>
      </form>
    </div>
  );
};

export default MyInput;
