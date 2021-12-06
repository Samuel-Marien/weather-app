import React, { useContext } from 'react';

import Context from './context';

import iconToBg from './iconToBg';

const BgDisplayer = (props) => {
  const { weatherCard } = useContext(Context);

  const myUrl = iconToBg(weatherCard);

  const { children } = props;
  return (
    <div
      className="overflow-hidden  rounded-xl  mt-20 shadow-lg"
      style={{
        backgroundImage: `url(${myUrl})`,
        backgroundSize: 'cover'
      }}
    >
      {children}
    </div>
  );
};

export default BgDisplayer;
