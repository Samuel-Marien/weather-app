import React, { useState, useEffect, useContext } from 'react';

import Context from './context';

function Clock() {
  const { weatherCard } = useContext(Context);
  const [currentDay, setCurrentDay] = useState('');
  const [currentDayNumber, setCurrentDayNumber] = useState(new Date().getDay());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [hour, setHour] = useState(new Date().getHours());
  const [minute, setMinute] = useState(new Date().getMinutes());
  const [colorClock, setColorClock] = useState(true);

  const displayZero = (number) => {
    return number < 10 ? '0' + number : number;
  };

  const refreshClock = () => {
    setHour(new Date().getHours());
    setMinute(new Date().getMinutes());
  };

  useEffect(() => {
    const toggleColorClock = () => {
      if (weatherCard) {
        if (
          weatherCard.current.last_updated.slice(11, 13) > 20 ||
          weatherCard.current.last_updated.slice(11, 13) <= 6
        ) {
          setColorClock(false);
        } else {
          setColorClock(true);
        }
      }
    };
    toggleColorClock();
    let dayOptions = { weekday: 'long' };
    let monthOptions = { month: 'long' };
    setCurrentDay(new Intl.DateTimeFormat('fr-FR', dayOptions).format());
    setCurrentMonth(new Intl.DateTimeFormat('fr-FR', monthOptions).format());
    const currentDayNumber = new Date();
    setCurrentDayNumber(currentDayNumber.getDate());
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, [colorClock, weatherCard]);

  return (
    <div className={colorClock ? 'text-black' : 'text-white'}>
      <div className="flex justify-end text-7xl font-extralight">
        <span>{displayZero(hour)}</span> :<span>{displayZero(minute)}</span>
      </div>
      <div className="flex justify-end">
        <span className="mr-1">{currentDay}</span>
        <span className="mr-1">{displayZero(currentDayNumber)} </span>
        <span>{currentMonth}</span>
      </div>
    </div>
  );
}
export default Clock;
