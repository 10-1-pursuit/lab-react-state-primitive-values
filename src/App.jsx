import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(1);
  const [pay10ToChange, setPay10ToChange] = useState(false);
  const [increaseBy, setIncreaseBy] = useState(1)

  const handleIncreaseNum = () => {
    setCount(count + increaseBy)
    // setCount(pay10ToChange ? count + 2 : count + 1);
    setPay10ToChange(false);
  };

  // Function to handle the "Pay 10 points to change from +X to +Y" button click
  const handleChangeIncrease = () => {
    if (count >= 10) {
      setCount(count - 10);
      setPay10ToChange(true);
      setIncreaseBy(increaseBy + 1)
    } else {
 alert("You can't afford that!")
 setPay10ToChange(false)
    }
  }
  const handleGameRestart = () => {
    setCount(1);
    setPay10ToChange(false);
    setIncreaseBy(1);
  }

  return (
    <main>
      <p>Nicki's React State 🤓 Lab</p>
      <h1>Current Score: {count}</h1>
      <button onClick={handleIncreaseNum}>+{increaseBy}</button>
      {count >= 10 && !pay10ToChange && (
        <button onClick={handleChangeIncrease}>
          Pay 10 points to change from +{increaseBy } to +{increaseBy +1}
        </button>
      )}
      {count >= 100 && (
        <button onClick={handleGameRestart}>You Win! Click to Restart</button>
      )}
    </main>
  );
}

export default App;
