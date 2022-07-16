import React, { useState } from 'react';

const Counter = (props) => {
  const [mins, setMins] = useState('');
  const [secs, setSecs] = useState('');
  // const timer = React.createRef('');


  5: 40
  const startTimer = () => {
    // timer = setInterval(() => {
      //if (secs > 0){
        //   setSecs(--secs);
      }else if(mins > 0 && secs === 0){
        setSecs(60);  
        setMins(--mins);
      }else if(mins === 0 && secs === 0){
        clearInterval(timer);
      }

    
    // }, 1000);
  };

  const pauseResumeTimer = () => {};

  const resetTimer = () => {
    setMins('');
    setSecs('');
    clearInterval(timer);
  };

  return (
    <>
      <div>
        <div>
          <span>
            Timer: {mins && mins}: {secs && secs}
          </span>
        </div>
        <br />
        <input
          type="number"
          value={mins}
          onChange={(e) => {
            setMins(e.target.value);
          }}
        />
        <input
          type="number"
          value={secs}
          onChange={(e) => {
            setSecs(e.target.value);
          }}
        />
      </div>
      <br />
      <div>
        <button onClick={startTimer}>Start</button>
        <button>Pause/Resume</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </>
  );
};

export default Counter;
