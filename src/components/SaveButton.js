import React, { useContext } from 'react';

import Context from './context';

import { MdFavoriteBorder } from 'react-icons/md';

const SaveButton = () => {
  const { citySave } = useContext(Context);
  const { setCitySaveView } = useContext(Context);

  let counter = localStorage.getItem('localCounter') || 0;

  const handleClick = () => {
    counter++;
    localStorage.setItem(`local${counter}`, citySave);
    localStorage.setItem('localCounter', counter);
    setCitySaveView((citySaveView) => [
      ...citySaveView,
      localStorage.getItem(`local${counter}`)
    ]);
  };

  return (
    <div>
      {citySave ? (
        <button
          className="border-2 border-gray-200 p-2 rounded shadow-lg"
          onClick={handleClick}
        >
          <MdFavoriteBorder />
        </button>
      ) : null}
    </div>
  );
};

export default SaveButton;
