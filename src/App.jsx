import React from "react";
import { useState } from "react";
import IncrementButton from "./Components/IncrementButton";
import PayButton from "./Components/PayButton";
import VictoryScreen from "./Components/VictoryScreen";
import "./App.css";

// Used useState "Hook". State is basically a variable that can hold data and change over time.
function App () {
  // Create two state variables 'score and incrementor', score keeps track of current score.
  const [score, setScore] = useState(0);
  // Incrementor represents the value added to score when user clicks the button.
  const [incrementor,setIncrementor] = useState(1);

  // This function is called when user clicks the button to increase score.
  const handleIncrement = () => {
    // Use setScore to update the score state by adding the value of incrementor to current score.
    setScore(score + incrementor);
  }

  // This function is called when user clicks the button to pay 10 points and increase incrementor.
  const handlePay = () => {
    // If user has more than 10 points then minus current score by 10 and increase incrementor by 1
    if( score >= 10 ) {
      setScore(score - 10);
      setIncrementor(incrementor + 1);
    } else {
      alert("You can't afford that!")
    }
  }

  // This function is called when user clicks Play again?.
  // It resets the score to 0 and incrementor to 1 to start a new game.
  const handleRestart = () => {
    setScore(0);
    setIncrementor(1);
  }

  // if score is more than or equal to 100 then show the victory screen, if score is less than 100 then,
  // show the game with the ScoreDisplay, IncrementButton, and PayButton
  return (
      <main>
        {score >= 100 ? (
          <VictoryScreen score={score} handleRestart={handleRestart} />
        ) : (
          <>
          <h1>Current Score: {score}</h1>
          <IncrementButton incrementor={incrementor} handleIncrement={handleIncrement} />
          <PayButton score={score} incrementor={incrementor} handlePay={handlePay} />
          </>
        )}
      </main>
    )
}

export default App;
