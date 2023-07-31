import React, { useState } from "react";
import ScoreDisplay from "../components/ScoreDisplay.jsx";
import IncrementButton from "../components/Increment.jsx"
import PayButton from "../components/Pay.jsx"
import "./App.css";

function App() {
  const [currentScore, setScore] = useState(0)
  const [incrementor, setIncrementor] = useState(1)
  const [hasWon, setHasWon] = useState(false)

  const handleIncrement = () => {
    setScore(currentScore + incrementor)
  }

  const payPoints = () => {
    if (currentScore >= 10) {
      setScore(currentScore - 10)
      setIncrementor(incrementor + 1)
    } else {
      alert("You can't afford that!")
    }
  }

  const restartGame = () => {
    setScore(0)
    setIncrementor(1)
    setHasWon(false)
  }

  if (currentScore >= 100 && !hasWon) {
    setHasWon(true)
  }


  return (
    <main>
      <ScoreDisplay score={currentScore} />

      {!hasWon ? (
        <div>
          <IncrementButton onClick={handleIncrement} incrementor={incrementor} /> <br /><br />
          <PayButton onClick={payPoints} incrementor={incrementor} />
        </div>
      ) : (
        <div>
          <h2>You Win!</h2>
          <button onClick={restartGame}>Play Again?</button>
        </div>
      )}
    </main>
  );
}

export default App;
