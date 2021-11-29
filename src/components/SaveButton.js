import React, { useContext } from 'react';

import Context from './context';

import { MdFavoriteBorder } from 'react-icons/md';

const SaveButton = () => {
  const { citySave } = useContext(Context);
  // const [value, setValue] = useState('');

  const handleClick = () => {
    localStorage.setItem('myValueInLocalStorage', citySave);
    console.log(citySave + ' is save to your favorites');
  };

  return (
    <button
      className="border-2 border-gray-200 p-2 rounded shadow-lg"
      onClick={handleClick}
    >
      <MdFavoriteBorder />
    </button>
  );
};

export default SaveButton;
