// import React, { useState, useEffect } from 'react';

// const TimePicker = ({ onSelectTime }) => {
//   const [selectedTime, setSelectedTime] = useState(new Date());
//   const [isInputActive, setInputActive] = useState(false);
//   const [scrollingUnit, setScrollingUnit] = useState(null);

//   const handleInputFocus = () => {
//     setInputActive(true);
//   };

//   const handleInputBlur = () => {
//     setInputActive(false);
//     setScrollingUnit(null);
//   };

//   const handleInputScroll = (e, unit) => {
//     if (isInputActive) {
//       const newTime = new Date(selectedTime);

//       if (unit === 'hour') {
//         newTime.setHours(selectedTime.getHours() + e.deltaY);
//       } else if (unit === 'minute') {
//         newTime.setMinutes(selectedTime.getMinutes() + e.deltaY);
//       } else if (unit === 'second') {
//         newTime.setSeconds(selectedTime.getSeconds() + e.deltaY);
//       }

//       setSelectedTime(newTime);
//       onSelectTime(newTime.toLocaleTimeString());
//       setScrollingUnit(unit);
//     }
//   };

//   useEffect(() => {
//     if (!isInputActive) {
//       const updateInterval = setInterval(() => {
//         const updatedTime = new Date();
//         setSelectedTime(updatedTime);
//         onSelectTime(updatedTime.toLocaleTimeString());
//       }, 1000);

//       return () => {
//         clearInterval(updateInterval);
//       };
//     }
//   }, [onSelectTime, isInputActive]);

//   return (
//     <div className="time-picker">
//       <input
//         type="text"
//         value={selectedTime.toLocaleTimeString()}
//         onFocus={handleInputFocus}
//         onBlur={handleInputBlur}
//         onWheel={(e) => handleInputScroll(e, scrollingUnit || 'second')}
//         readOnly={!isInputActive}
//       />
//     </div>
//   );
// };

// export default TimePicker;

// import React, { useState, useEffect } from 'react';

// const TimePicker = () => {
//   const [isInputActive, setInputActive] = useState(false);
//   const [activeInput, setActiveInput] = useState(null);
//   const [isAM, setAM] = useState(true);
//   const [message, setMessage] = useState('');

//   // Get the current time
//   const getCurrentTime = () => {
//     const currentTime = new Date();
//     const hours = currentTime.getHours() % 12 || 12;
//     const minutes = currentTime.getMinutes();
//     const seconds = currentTime.getSeconds();
//     return { hours, minutes, seconds, isAM: currentTime.getHours() < 12 };
//   };

//   // State variables for input units
//   const [hour, setHour] = useState(getCurrentTime().hours);
//   const [minute, setMinute] = useState(getCurrentTime().minutes);
//   const [second, setSecond] = useState(getCurrentTime().seconds);

//   // Handlers for input units
//   const handleInputScroll = (e, unit) => {
//     if (isInputActive && activeInput === unit) {
//       const newValue = unit === 'hour' ? hour : unit === 'minute' ? minute : second;
//       const step = e.deltaY > 0 ? -1 : 1; // Scroll down to decrease, scroll up to increase
//       const updatedValue = (newValue + step) % (unit === 'hour' ? 12 : 60);

//       if (unit === 'hour') {
//         setHour(updatedValue < 1 ? 12 : updatedValue);
//         if (updatedValue === 12) setAM(!isAM);
//       }
//       if (unit === 'minute') setMinute(updatedValue < 0 ? 59 : updatedValue);
//       if (unit === 'second') setSecond(updatedValue < 0 ? 59 : updatedValue);
//     }
//   };

//   // Handlers for input focus and blur
//   const handleInputFocus = (unit) => {
//     setInputActive(true);
//     setActiveInput(unit);
//   };

//   const handleInputBlur = () => {
//     setInputActive(false);
//     setActiveInput(null);
//   };

//   useEffect(() => {
//     // Check if the current time matches the input time
//     const currentTime = getCurrentTime();
//     if (
//       currentTime.hours === hour &&
//       currentTime.minutes === minute &&
//       currentTime.seconds === second &&
//       currentTime.isAM === isAM
//     ) {
//       setMessage('Time to work');
//       setTimeout(() => {
//         setMessage('');
//       }, 30000); // Clear the message after 30 seconds
//     }
//   }, [hour, minute, second, isAM]);

//   // Function to update input time and trigger the message check
//   const updateInputTime = () => {
//     const currentTime = getCurrentTime();
//     setHour(currentTime.hours);
//     setMinute(currentTime.minutes);
//     setSecond(currentTime.seconds);
//     setAM(currentTime.isAM);
//   };

//   return (
//     <div className="time-picker">
//       <div className="digital-watch">
//         {hour}:{minute < 10 ? `0${minute}` : minute}:{second < 10 ? `0${second}` : second} {isAM ? 'AM' : 'PM'}
//       </div>
//       <div className="message">{message}</div>
//       <input
//         type="text"
//         value={hour}
//         onFocus={() => handleInputFocus('hour')}
//         onBlur={handleInputBlur}
//         onWheel={(e) => handleInputScroll(e, 'hour')}
//         readOnly={!isInputActive || activeInput !== 'hour'}
//         onChange={updateInputTime}
//       />
//       <input
//         type="text"
//         value={minute}
//         onFocus={() => handleInputFocus('minute')}
//         onBlur={handleInputBlur}
//         onWheel={(e) => handleInputScroll(e, 'minute')}
//         readOnly={!isInputActive || activeInput !== 'minute'}
//         onChange={updateInputTime}
//       />
//       <input
//         type="text"
//         value={second}
//         onFocus={() => handleInputFocus('second')}
//         onBlur={handleInputBlur}
//         onWheel={(e) => handleInputScroll(e, 'second')}
//         readOnly={!isInputActive || activeInput !== 'second'}
//         onChange={updateInputTime}
//       />
//       <input
//         type="text"
//         value={isAM ? 'AM' : 'PM'}
//         onFocus={() => handleInputFocus('ampm')}
//         onBlur={handleInputBlur}
//         onWheel={(e) => setAM(!isAM)}
//         readOnly={!isInputActive || activeInput !== 'ampm'}
//         onChange={updateInputTime}
//       />
//     </div>
//   );
// };

// export default TimePicker;

import React, { useState, useEffect } from 'react';

const TimePicker = () => {
  const [isInputActive, setInputActive] = useState(false);
  const [activeInput, setActiveInput] = useState(null);
//   const [isAM, setAM] = useState(true);
  const [message, setMessage] = useState('');

  // Function to get the current time in the same format as the input time
  const getCurrentTime = () => {
    const currentTime = new Date();
    const hours = currentTime.getHours() % 12 || 12;
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    const isAM = currentTime.getHours() < 12;
    return { hours, minutes, seconds, isAM };
  };

  // State variables for input units
  const [hour, setHour] = useState(getCurrentTime().hours);
  const [minute, setMinute] = useState(getCurrentTime().minutes);
  const [second, setSecond] = useState(getCurrentTime().seconds);
  const [isAM, setAM] = useState(getCurrentTime().isAM);
//   const [isAM, setAM] = useState(initialTime.isAM);

  

  // Function to check if the current time matches the input time
  const checkTimeMatch = () => {
    const currentTime = getCurrentTime();
    if (
      currentTime.hours === hour &&
      currentTime.minutes === minute &&
      currentTime.seconds === second &&
      currentTime.isAM === isAM
    ) {
      setMessage('Time to work');
      setTimeout(() => {
        setMessage('');
      }, 30000); // Clear the message after 30 seconds
    }
  };

  // Handlers for input units
  const handleInputScroll = (e, unit) => {
    if (isInputActive && activeInput === unit) {
      const newValue = unit === 'hour' ? hour : unit === 'minute' ? minute : second;
      const step = e.deltaY > 0 ? -1 : 1; // Scroll down to decrease, scroll up to increase
      const updatedValue = (newValue + step) % (unit === 'hour' ? 12 : 60);

      if (unit === 'hour') {
        setHour(updatedValue < 1 ? 12 : updatedValue);
        if (updatedValue === 12) setAM(!isAM);
      }
      if (unit === 'minute') setMinute(updatedValue < 0 ? 59 : updatedValue);
      if (unit === 'second') setSecond(updatedValue < 0 ? 59 : updatedValue);
    }
    checkTimeMatch(); // Call the time check function
  };

  // Handlers for input focus and blur
  const handleInputFocus = (unit) => {
    setInputActive(true);
    setActiveInput(unit);
  };

  const handleInputBlur = () => {
    setInputActive(false);
    setActiveInput(null);
    checkTimeMatch(); // Call the time check function
  };

  useEffect(() => {
    checkTimeMatch(); // Call the time check function initially
  }, []); // Empty dependency array, only run this once

  return (
    <div className="time-picker-container">
      <div className="time-picker">
        <div className="digital-watch">
          {hour}:{minute < 10 ? `0${minute}` : minute}:{second < 10 ? `0${second}` : second} {isAM ? 'AM' : 'PM'}
        </div>
        <div className="message">{message}</div>
        <input
          type="text"
          value={hour}
          onFocus={() => handleInputFocus('hour')}
          onBlur={handleInputBlur}
          onWheel={(e) => handleInputScroll(e, 'hour')}
          readOnly={!isInputActive || activeInput !== 'hour'}
        />
        <input
          type="text"
          value={minute}
          onFocus={() => handleInputFocus('minute')}
          onBlur={handleInputBlur}
          onWheel={(e) => handleInputScroll(e, 'minute')}
          readOnly={!isInputActive || activeInput !== 'minute'}
        />
        <input
          type="text"
          value={second}
          onFocus={() => handleInputFocus('second')}
          onBlur={handleInputBlur}
          onWheel={(e) => handleInputScroll(e, 'second')}
          readOnly={!isInputActive || activeInput !== 'second'}
        />
        <input
          type="text"
          value={isAM ? 'AM' : 'PM'}
          onFocus={() => handleInputFocus('ampm')}
          onBlur={handleInputBlur}
          onWheel={(e) => setAM(!isAM)}
          readOnly={!isInputActive || activeInput !== 'ampm'}
        />
      </div>
    </div>
  );
};

export default TimePicker;
