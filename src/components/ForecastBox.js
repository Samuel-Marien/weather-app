import React, { useContext, useState } from 'react';

import Context from './context';

import { RiTempColdFill } from 'react-icons/ri';
import { WiHumidity } from 'react-icons/wi';
import { BsToggleOff, BsToggleOn } from 'react-icons/bs';

const ForecastBox = () => {
  const [show, setShow] = useState(false);
  const [showToday, setShowToday] = useState(true);
  const [showTomorow, setShowTomorow] = useState(false);
  const [showAfterTomorow, setShowAfterTomorow] = useState(false);
  const { weatherCard } = useContext(Context);

  const ForecastItem = (props) => {
    const { day, hour } = props;
    return (
      <div className="flex-col mr-2 w-max bg-white bg-opacity-50">
        <div>
          {weatherCard.forecast.forecastday[day].hour[hour].time.slice(11)}
        </div>
        <div className=" bg-white bg-opacity-80 rounded-lg">
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

  const handleToday = () => {
    setShowToday(true);
    setShowTomorow(false);
    setShowAfterTomorow(false);
  };

  const handleTomorow = () => {
    setShowToday(false);
    setShowTomorow(true);
    setShowAfterTomorow(false);
  };

  const handleAfterTomorow = () => {
    setShowToday(false);
    setShowTomorow(false);
    setShowAfterTomorow(true);
  };

  const MyBreadcrumb = () => {
    return (
      <nav
        className="flex justify-between mb-2 bg-white bg-opacity-60 w-2/3 p-1 rounded-lg shadow"
        aria-label="Breadcrumb"
      >
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <span
              onClick={handleToday}
              className={
                showToday
                  ? 'cursor-pointer text-blue-600 ml-1 md:ml-2 font-bold bg-white bg-opacity-10 p-1 rounded shadow-lg'
                  : 'cursor-pointer text-gray-600 hover:text-gray-900 ml-1 md:ml-2 font-medium p-1'
              }
            >
              Today
            </span>
          </li>
          <li>
            <div className="flex items-center">
              <span
                onClick={handleTomorow}
                className={
                  showTomorow
                    ? 'cursor-pointer text-blue-600 ml-1 md:ml-2 font-bold bg-white bg-opacity-10 p-1 rounded shadow-lg'
                    : 'cursor-pointer text-gray-600 hover:text-gray-900 ml-1 md:ml-2 font-medium p-1'
                }
              >
                Tomorrow
              </span>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <span
                onClick={handleAfterTomorow}
                className={
                  showAfterTomorow
                    ? 'cursor-pointer text-blue-600 ml-1 md:ml-2 font-bold bg-white bg-opacity-10 p-1 rounded shadow-lg'
                    : 'cursor-pointer text-gray-600 hover:text-gray-900 ml-1 md:ml-2 font-medium p-1'
                }
              >
                After tomorrow
              </span>
            </div>
          </li>
        </ol>
        <div className="flex items-center ml-10">
          {show ? (
            <div className="flex items-center">
              <div className="text-gray-500">AM</div>
              <div onClick={toggleMenu} className="mx-1 cursor-pointer">
                <BsToggleOn />
              </div>
              <div className="text-blue-600">PM</div>
            </div>
          ) : (
            <div className="flex items-center">
              <div className="text-blue-600">AM</div>
              <div onClick={toggleMenu} className="mx-1 cursor-pointer">
                <BsToggleOff />
              </div>
              <div className="text-gray-500">PM</div>
            </div>
          )}
        </div>
      </nav>
    );
  };

  return (
    <div className="text-center ">
      <MyBreadcrumb />
      {weatherCard ? (
        <div className="flex items-center overflow-x">
          {showToday ? (
            show ? (
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
            )
          ) : null}
          {showTomorow ? (
            show ? (
              <div className="flex">
                <ForecastItem day={1} hour={12} />
                <ForecastItem day={1} hour={14} />
                <ForecastItem day={1} hour={16} />
                <ForecastItem day={1} hour={18} />
                <ForecastItem day={1} hour={20} />
                <ForecastItem day={1} hour={22} />
                <ForecastItem day={2} hour={0} />
              </div>
            ) : (
              <div className="flex">
                <ForecastItem day={1} hour={0} />
                <ForecastItem day={1} hour={2} />
                <ForecastItem day={1} hour={4} />
                <ForecastItem day={1} hour={6} />
                <ForecastItem day={1} hour={8} />
                <ForecastItem day={1} hour={10} />
                <ForecastItem day={1} hour={12} />
              </div>
            )
          ) : null}
          {showAfterTomorow ? (
            show ? (
              <div className="flex">
                <ForecastItem day={2} hour={12} />
                <ForecastItem day={2} hour={14} />
                <ForecastItem day={2} hour={16} />
                <ForecastItem day={2} hour={18} />
                <ForecastItem day={2} hour={20} />
                <ForecastItem day={2} hour={22} />
                <ForecastItem day={2} hour={0} />
              </div>
            ) : (
              <div className="flex">
                <ForecastItem day={2} hour={0} />
                <ForecastItem day={2} hour={2} />
                <ForecastItem day={2} hour={4} />
                <ForecastItem day={2} hour={6} />
                <ForecastItem day={2} hour={8} />
                <ForecastItem day={2} hour={10} />
                <ForecastItem day={2} hour={12} />
              </div>
            )
          ) : null}
        </div>
      ) : null}
    </div>
  );
};

export default ForecastBox;
