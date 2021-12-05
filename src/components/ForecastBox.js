import React, { useContext, useState } from 'react';

import Context from './context';

import { RiTempColdFill } from 'react-icons/ri';
import { WiHumidity } from 'react-icons/wi';
import { BsToggleOff, BsToggleOn } from 'react-icons/bs';

const ForecastBox = () => {
  const [show, setShow] = useState(false);
  const { weatherCard } = useContext(Context);

  const ForecastItem = (props) => {
    const { day, hour } = props;
    return (
      <div className="flex-col mr-2 w-max">
        <div>
          {weatherCard.forecast.forecastday[day].hour[hour].time.slice(11)}
        </div>
        <div className=" bg-white bg-opacity-30 rounded-lg">
          <div className="flex justify-center">
            <img
              src={
                weatherCard.forecast.forecastday[day].hour[hour].condition.icon
              }
              alt={
                weatherCard.forecast.forecastday[day].hour[hour].condition.text
              }
            />
          </div>
          <div className="flex justify-between">
            <div className="flex items-center">
              <RiTempColdFill />
              <div className="text-sm">
                {weatherCard.forecast.forecastday[day].hour[hour].temp_c} °
              </div>
            </div>
            <div className="flex items-center">
              <WiHumidity />
              <div className="text-sm">
                {weatherCard.forecast.forecastday[day].hour[hour].humidity} %
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const toggleMenu = () => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  return (
    <div className="text-center ">
      {weatherCard ? (
        <div className="flex items-center w-full overflow-x">
          {show ? (
            <div className="mr-3">
              <div className="text-gray-500">AM</div>
              <div
                onClick={toggleMenu}
                className="flex justify-center cursor-pointer"
              >
                <BsToggleOn />
              </div>
              <div>PM</div>
            </div>
          ) : (
            <div className="mr-3">
              <div>AM</div>
              <div
                onClick={toggleMenu}
                className="flex justify-center cursor-pointer"
              >
                <BsToggleOff />
              </div>
              <div className="text-gray-500">PM</div>
            </div>
          )}

          {show ? (
            <div className="flex">
              <ForecastItem day={0} hour={12} />
              <ForecastItem day={0} hour={14} />
              <ForecastItem day={0} hour={16} />
              <ForecastItem day={0} hour={18} />
              <ForecastItem day={0} hour={20} />
              <ForecastItem day={0} hour={22} />
              <ForecastItem day={1} hour={0} />
            </div>
          ) : (
            <div className="flex">
              <ForecastItem day={0} hour={0} />
              <ForecastItem day={0} hour={2} />
              <ForecastItem day={0} hour={4} />
              <ForecastItem day={0} hour={6} />
              <ForecastItem day={0} hour={8} />
              <ForecastItem day={0} hour={10} />
              <ForecastItem day={0} hour={12} />
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default ForecastBox;
