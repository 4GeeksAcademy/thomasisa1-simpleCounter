import React, { useState, useEffect } from 'react';
import SecondsCounter from '../component/SecondsCounter';
import '../styles.css';

const App = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <SecondsCounter seconds={seconds} />
    </div>
  );
};

export default App;