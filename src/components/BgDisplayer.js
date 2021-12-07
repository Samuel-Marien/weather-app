import React, { useContext } from 'react';

import Context from './context';

import iconToBg from './iconToBg';

const BgDisplayer = (props) => {
  const { children } = props;
  const { weatherCard } = useContext(Context);

  const myUrl = iconToBg(weatherCard);

  return (
    <div
      className="overflow-hidden w-2/3 mx-auto mt-24 rounded-xl shadow-lg"
      style={{
        backgroundImage: `url(${myUrl})`,
        backgroundSize: 'cover',
        transition: '1s'
      }}
    >
      {children}
    </div>
  );
};

export default BgDisplayer;
