import React, { useEffect, useState } from 'react';
import DigitalWatch from './DigitalWatch';
import TimePicker from './TimePicker';

function TimePick() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    // Function to update the time at regular intervals
    useEffect(() => {
      const timer = setInterval(() => {
        setTime(new Date().toLocaleTimeString());
      }, 1000); // Update every 1 second
  
      return () => {
        clearInterval(timer); // Clean up the timer on unmount
      };
    }, []);
  
    const handleTimeSelection = (selectedTime) => {
      setTime(selectedTime);
    };
  
    return (
      <div className="flex flex-col justify-center items-center h-[100vh]">
        <h1>Digital Watch</h1>
        <DigitalWatch time={time} />
        <TimePicker onSelectTime={handleTimeSelection} />
      </div>
    );
  }

export default TimePick;
