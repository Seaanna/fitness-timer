import React from 'react';

function Timer() {
  return (
    <div>
      <p className="timer_text">
        00:00:00
      </p>
      <div className="button_grid">
        <button className="start">Start</button>
        <button className="stop">Stop</button>
        <button className="reset">Reset</button>
      </div>
    </div>
  );
}

export default Timer;
