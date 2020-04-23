import React, { useState, useEffect } from 'react';
import { formatSeconds } from "../helpers/timer";

const Timer = () => {
  const [seconds, setSeconds] = useState(300);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const reset = () => {
    setIsActive(false)
    setSeconds(300)
  };

  return (
    <div>
      <p className="timer_text">
        { formatSeconds(seconds) }
      </p>
      <div className="button_grid">
        <button className="start" onClick={() => setIsActive(true)}>
          Start
        </button>
        <button className="stop" onClick={() => setIsActive(false)}>
          Stop
        </button>
        <button className="reset" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Timer;
