import React, { useContext } from 'react';

import Context from './context';

import iconToBg from './iconToBg';

const BgDisplayer = (props) => {
  const { children } = props;
  const { weatherCard } = useContext(Context);

  const myUrl = iconToBg(weatherCard);

  return (
    <div
      className="overflow-hidden w-auto m-10 rounded-xl shadow-lg"
      style={{
        backgroundImage: `url(${myUrl})`,
        backgroundSize: 'cover',
        transition: '.5s'
      }}
    >
      {children}
    </div>
  );
};

export default BgDisplayer;
