import React, { useState } from "react";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  const [incrementValue, setIncrementValue] = useState(1);
  return (
    <main>
      <p>React State Lab</p>

      <h1>Current Score: {score}</h1>

      <button onClick={() => score<100 ? setScore(score + incrementValue) : null /* need to write code that display victory state */ }> +{incrementValue}</button>
      <br />
      <br />
      <button onClick={() => {
        score >= 10 ?(setScore(score - 10), setIncrementValue(incrementValue + 1)) : window.alert("You can't afford that");
      }
      }>
        Pay 10 points to change from +{incrementValue} to +{incrementValue + 1} </button>
    </main>
  );
}

export default App;
