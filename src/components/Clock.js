import React, { useState, useEffect } from 'react';

function Clock() {
  const [currentDay, setCurrentDay] = useState('');
  // const [currentDayNumber, setCurrentDayNumber] = useState(new Date().getDay());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [hour, setHour] = useState(new Date().getHours());
  const [minute, setMinute] = useState(new Date().getMinutes());
  const [second, setSecond] = useState(new Date().getSeconds());

  const currentDayNumber = new Date().getDay();

  const displayZero = (number) => {
    return number < 10 ? '0' + number : number;
  };

  const refreshClock = () => {
    setHour(new Date().getHours());
    setMinute(new Date().getMinutes());
    setSecond(new Date().getSeconds());
  };

  useEffect(() => {
    let dayOptions = { weekday: 'long' };
    let monthOptions = { month: 'long' };
    setCurrentDay(new Intl.DateTimeFormat('fr-FR', dayOptions).format());
    setCurrentMonth(new Intl.DateTimeFormat('fr-FR', monthOptions).format());
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div>
      <div className="text-8xl font-extralight">
        <span>{displayZero(hour)} : </span>
        <span>{displayZero(minute)}</span>
      </div>
      {/* <span>{displayZero(second)}</span> */}
      <div className="flex justify-end">
        <span className="mr-1">{currentDay}</span>
        <span className="mr-1">{displayZero(currentDayNumber)} </span>
        <span>{currentMonth}</span>
      </div>
    </div>
  );
}
export default Clock;
