import React, { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 10); // Update every 10 milliseconds

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  // Convert time to seconds and milliseconds
  const seconds = Math.floor(time / 100);
  const milliseconds = time % 100;

  //poor attempt to making a rotating clock
  const secondRotation = ((seconds % 60) / 60) * 360;
  const minuteRotation = ((Math.floor(seconds / 60) % 60) / 60) * 360;
  const hourRotation = ((Math.floor(seconds / 3600) % 12) / 12) * 360;

  // Convert to strings and put zeros
  const paddedSeconds = seconds.toString().padStart(5, '0').split('');
  const paddedMilliseconds = milliseconds.toString().padStart(2, '0').split('');

  return (
    <div className="seconds-counter">
      <div className="animated-clock">
        <div className="clock-face">
          <div
            className="hand hour-hand"
            style={{ transform: `rotate(${hourRotation}deg)` }}
          ></div>
          <div
            className="hand minute-hand"
            style={{ transform: `rotate(${minuteRotation}deg)` }}
          ></div>
          <div
            className="hand second-hand"
            style={{ transform: `rotate(${secondRotation}deg)` }}
          ></div>
        </div>
      </div>
      <div className="time-display">
        {paddedSeconds.map((digit, index) => (
          <div key={index} className="digit">
            {digit}
          </div>
        ))}
        <span className="milliseconds-separator">:</span>
        {paddedMilliseconds.map((digit, index) => (
          <div key={index} className="digit">
            {digit}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Clock;