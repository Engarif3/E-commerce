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

import React, { useState, useEffect } from 'react';

const TimePicker = ({ onSelectTime }) => {
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [isInputActive, setInputActive] = useState(false);
  const [activeInput, setActiveInput] = useState(null);

  // State variables for each input unit
  const [hour, setHour] = useState(selectedTime.getHours());
  const [minute, setMinute] = useState(selectedTime.getMinutes());
  const [second, setSecond] = useState(selectedTime.getSeconds());

  // Handlers for each input unit
  const handleHourInputScroll = (e) => {
    if (isInputActive && activeInput === 'hour') {
      const newHour = (hour + e.deltaY) % 24;
      setHour(newHour < 0 ? 23 : newHour);
      updateSelectedTime();
    }
  };

  const handleMinuteInputScroll = (e) => {
    if (isInputActive && activeInput === 'minute') {
      const newMinute = (minute + e.deltaY) % 60;
      setMinute(newMinute < 0 ? 59 : newMinute);
      updateSelectedTime();
    }
  };

  const handleSecondInputScroll = (e) => {
    if (isInputActive && activeInput === 'second') {
      const newSecond = (second + e.deltaY) % 60;
      setSecond(newSecond < 0 ? 59 : newSecond);
      updateSelectedTime();
    }
  };

  // Function to update the selected time
  const updateSelectedTime = () => {
    const newTime = new Date(selectedTime);
    newTime.setHours(hour);
    newTime.setMinutes(minute);
    newTime.setSeconds(second);
    setSelectedTime(newTime);
    onSelectTime(newTime.toLocaleTimeString());
  };

  // Handlers for input focus and blur
  const handleInputFocus = (unit) => {
    setInputActive(true);
    setActiveInput(unit);
  };

  const handleInputBlur = () => {
    setInputActive(false);
    setActiveInput(null);
  };

  useEffect(() => {
    if (!isInputActive) {
      const updateInterval = setInterval(() => {
        const updatedTime = new Date();
        setSelectedTime(updatedTime);
        onSelectTime(updatedTime.toLocaleTimeString());
      }, 1000);

      return () => {
        clearInterval(updateInterval);
      };
    }
  }, [onSelectTime, isInputActive]);

  return (
    <div className="time-picker">
      <input
        type="text"
        value={hour}
        onFocus={() => handleInputFocus('hour')}
        onBlur={handleInputBlur}
        onWheel={handleHourInputScroll}
        readOnly={!isInputActive || activeInput !== 'hour'}
      />
      <input
        type="text"
        value={minute}
        onFocus={() => handleInputFocus('minute')}
        onBlur={handleInputBlur}
        onWheel={handleMinuteInputScroll}
        readOnly={!isInputActive || activeInput !== 'minute'}
      />
      <input
        type="text"
        value={second}
        onFocus={() => handleInputFocus('second')}
        onBlur={handleInputBlur}
        onWheel={handleSecondInputScroll}
        readOnly={!isInputActive || activeInput !== 'second'}
      />
    </div>
  );
};

export default TimePicker;

