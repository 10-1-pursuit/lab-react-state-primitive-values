import React, { useState } from "react";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  const [buttonValue, setButtonValue] = useState(1);

  function raiseButtonValue() {
    if (score >= 10) {
      setScore(score - 10);
      setButtonValue(buttonValue + 1);
    } else {
      alert("You Can't Afford That!");
    }
  }
  function raiseScore() {
    setScore(score + buttonValue);
  }
  function reset() {
    setScore(0);
    setButtonValue(1);
  }

  return (
    <main>
      {score < 100 ? (
        <>
          <p>React State Lab</p>

          <h1>Current Score:{score}</h1>

          <button
            onClick={() => {
              setScore(score + buttonValue);
            }}
          >
            +{buttonValue}
          </button>
          <br />
          <button
            onClick={() => {
              raiseButtonValue();
            }}
          >
            Pay 10 points to change from +{buttonValue} to +{buttonValue + 1}
          </button>
        </>
      ) : (
        <>
          <h2>Current Score:{score}</h2>
          <h2>You Win!</h2>
          <button
            onClick={() => {
              reset();
            }}
          >
            Play Again?
          </button>
        </>
      )}
    </main>
  );
}

export default App;
