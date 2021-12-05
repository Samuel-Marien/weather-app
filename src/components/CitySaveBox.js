import React, { useContext } from 'react';

import Context from './context';

import { BsTrash } from 'react-icons/bs';
import { BiRefresh } from 'react-icons/bi';

const CitySaveBox = () => {
  const { setCitySaveView } = useContext(Context);
  const { setUserValue } = useContext(Context);
  const arr = [];

  const deleteCity = (key) => {
    localStorage.removeItem(key);
    setCitySaveView((citySaveView) => [
      ...citySaveView,
      localStorage.getItem(key)
    ]);
  };

  const deleteAllCitys = () => {
    localStorage.clear();
    setCitySaveView('');
  };

  for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i) !== 'localCounter') arr.push(localStorage.key(i));
  }

  const CityBoxItem = (props) => {
    const { myKey } = props;
    return (
      <div className="flex cursor-pointer">
        <div onClick={() => setUserValue(localStorage.getItem(myKey))}>
          {localStorage.getItem(myKey)}
        </div>
        {localStorage.getItem(myKey) ? (
          <button onClick={() => deleteCity(myKey)} className="ml-5">
            <BsTrash />
          </button>
        ) : null}
      </div>
    );
  };

  return (
    <div className="border border-gray-300">
      {/* le test  */}

      {/* la base  */}
      <div className="flex">
        <h1>my favorites city(s)</h1>
        <BiRefresh onClick={deleteAllCitys} className=" cursor-pointer" />
      </div>
      {arr
        ? arr.map((item, index) => {
            return <CityBoxItem myKey={item} key={index} />;
          })
        : null}
    </div>
  );
};

export default CitySaveBox;
