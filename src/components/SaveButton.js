import React, { useContext } from 'react';

import Context from './context';

import { MdFavoriteBorder } from 'react-icons/md';

const SaveButton = (props) => {
  const { city } = props;
  const { setCitySaveView } = useContext(Context);

  let counter = localStorage.getItem('localCounter') || 0;

  const handleClick = (city) => {
    counter++;
    localStorage.setItem(`local${counter}`, city);
    localStorage.setItem('localCounter', counter);
    setCitySaveView((citySaveView) => [
      ...citySaveView,
      localStorage.getItem(`local${counter}`)
    ]);
  };

  return (
    <div>
      {city ? (
        <button className="" onClick={() => handleClick(city)}>
          <MdFavoriteBorder />
        </button>
      ) : null}
    </div>
  );
};

export default SaveButton;
