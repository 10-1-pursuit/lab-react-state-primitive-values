import React from "react";
import "./App.css";
import { useState } from "react";

function App () {
   const [counter, setCounter] = useState(0)
   const [increment, setIncrement] = useState(1)

   const countClick = () => setCounter (counter + increment)

   function setCount (){
    if(counter < 10){
      alert("you cant afford that!")
      return
    }
    setIncrement(increment+ 1)
    setCounter(counter - 10)
   }
   function resetGame (){
    setCounter(0)
    setIncrement(1)
   }
   let gameInPlay = (
    <div>
      <h1>Current Score: {counter}</h1>
      <button onClick={countClick}>+{increment}</button>
      <button onClick={setCount}>Pay 10 points to change from +{increment} to + {increment + 1}</button>
    </div>
   )
   let youWon = (
    <div>
      <h2> You Win!</h2>
      <button onClick={resetGame}> Play again?</button>
    </div>
   )
    return <main>{counter < 100 ? gameInPlay : youWon}
      </main>
    
}

export default App;
