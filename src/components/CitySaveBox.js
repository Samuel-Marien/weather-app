import React, { useContext, useState } from 'react';

import Context from './context';

import { BsTrash } from 'react-icons/bs';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

const CitySaveBox = () => {
  const [show, setShow] = useState(false);
  const { setCitySaveView } = useContext(Context);
  const { setUserValue } = useContext(Context);
  const arr = [];

  const toggleMenu = () => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

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
      <div
        onClick={() => setUserValue(localStorage.getItem(myKey))}
        className=" py-1 px-3 flex cursor-pointer hover:bg-white active:bg-blue-300"
      >
        <button onClick={() => deleteCity(myKey)} className="mr-5 ">
          <BsTrash className="delay-75 duration-100 transform hover:scale-125 hover:text-red-700 transition ease-linear" />
        </button>
        {localStorage.getItem(myKey) ? (
          <div>{localStorage.getItem(myKey)}</div>
        ) : null}
      </div>
    );
  };

  return (
    <div className=" overflow-auto h-60">
      <div className=" p-2 bg-white bg-opacity-20 flex items-center shadow-lg rounded-md">
        <div>My saved citys</div>
        {show ? (
          <div className="ml-5 cursor-pointer " onClick={toggleMenu}>
            <MdKeyboardArrowDown />
          </div>
        ) : (
          <div className="ml-5 cursor-pointer " onClick={toggleMenu}>
            <MdKeyboardArrowUp />
          </div>
        )}
      </div>
      <div className="bg-white bg-opacity-10 rounded shadow-lg">
        {show
          ? arr
            ? arr.map((item, index) => {
                return (
                  <div key={index}>
                    <CityBoxItem myKey={item} />
                  </div>
                );
              })
            : null
          : null}
      </div>

      {show && arr.length > 0 ? (
        <div className="flex justify-center border-t pt-1 bg-white bg-opacity-10 rounded-b-lg">
          <div
            onClick={deleteAllCitys}
            className="cursor-pointer hover:text-red-600"
          >
            Delete all
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CitySaveBox;
