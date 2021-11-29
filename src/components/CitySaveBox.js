import React, { useContext } from 'react';

import Context from './context';

import { BsTrash } from 'react-icons/bs';

const CitySaveBox = () => {
  const { citySaveView, setCitySaveView } = useContext(Context);

  const handleCLick = () => {
    console.log('pop');
    localStorage.removeItem('myValueInLocalStorage');
    setCitySaveView('');
  };

  return (
    <div>
      my favorites city(s)
      {citySaveView ? (
        <div className="flex">
          <div>{citySaveView}</div>
          <button onClick={handleCLick}>
            <BsTrash />
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default CitySaveBox;
