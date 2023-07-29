import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(1);
  const [pay10ToChange, setPay10ToChange] = useState(false);

  const handleIncrement = () => {
    setCount(pay10ToChange ? count + 2 : count + 1);
    setPay10ToChange(false);
  };

  // Function to handle the "Pay 10 points to change from +X to +Y" button click
  const handleChangeIncrementor = () => {
    if (count >= 10) {
      setCount(count - 10);
      setPay10ToChange(true);
    }
  };

  return (
    <main>
      <p>Nicki's React State Lab</p>
      <h1>Current Score: {count}</h1>
      <button onClick={handleIncrement}>+{pay10ToChange ? 2 : 1}</button>
      {count >= 10 && !pay10ToChange && (
        <button onClick={handleChangeIncrementor}>
          Pay 10 points to change from +1 to +2
        </button>
      )}
    </main>
  );
}

export default App;
