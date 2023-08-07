import React, { useState } from "react";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  const [points, setPoints] = useState(1);

  const handleIncrement = () => {
    setScore(score + points);
  };

  const handleSpendPoints = () => {
    if (score >= 10) {
      setPoints((prevPoints) => prevPoints + 1);
      setScore((prevScore) => prevScore - 10);
    } else {
      alert("You can't afford that!");
    }
  };

const handleRestart = () => {
    setScore(0);
    setPoints(1);
  };

 
  const hasWon = score >= 100;

  return (
    <main>
      <p>React State Lab</p>
      {hasWon ? (
        <h1>You Win!</h1>
      ) : (
        <h1>Current Score: {score}</h1>
      )}

      {!hasWon && (
        <>
          <button onClick={handleIncrement}>+{points}</button>
          <br></br>
          <button onClick={handleSpendPoints}>
            Pay 10 points to change from +{points} to +{points + 1}
          </button>
          <br></br>
        </>
      )}

      <button onClick={handleRestart}>Restart Game</button>
    </main>
  );
}

export default App;


/*
You will be building an application that is similar to popular "clicker" games. The game has the following rules:

Clicking the "+X" button will increase the score by X. The value of X starts at 1.

If the user has at least 10 points and clicks the button "Pay 10 points to change from +X to +Y", the value of X will increase by 1. For example, at the beginning of the game the incrementor will be "+1". If you pay 10 points, the incrementor will change to "+2".

If the user doesn't have 10 points but clicks the button "Pay 10 points to change from +X to +Y", an alert message will say "You can't afford that!"

Once the user has accumulated 100 points, the game shows "You Win!" and allows the player to restart the game.

Detailed list



√ Display the current score to the user, starting from a score of 0
  √ increment by 1

√ Use the exact text: Current Score: followed by the score

√ Clicking a button increments the score by one

√ The button text should have the exact text: +1

√ Have a button where the user can spend 10 points to increase the value of each click by 1

 √ The button should have the exact text: Pay 10 points to change from +1 to +2

Display an alert with the exact text You can't afford that! if the user doesn't have enough points to spend

If the user has enough points, reduce the score by 10, and add 1 to points you add to your score each time you click the button.

The button text should change as well, for example from +1 to +2

The pay button text should also update, for example from Pay 10 points to change from +1 to +2 to Pay 10 points to change from +2 to +3

When the user has 100 or more points, display a victory screen

There should be an <h2> element with the exact text You Win!

There should be a button with the text Play again? (including the question mark)

Clicking on this button starts the game over again with a score of 0, a +1 button, etc.

Keep the user's score on the screen

Do not show the buttons to add to the score or pay points.

*/
