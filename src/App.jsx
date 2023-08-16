import { useState } from "react";
import React from "react";
import "./App.css";

function App() {
  const [score,setScore]= useState(0)
    const [points,setPoints]= useState(1)

  // const [nextLevel,setnextLevel]= useState(1)

  return ( 
    <>
      <main>
        <h1>
          {/* React State Lab */}
          Current Score: {score}
        </h1>
        <button onClick={ (se) => {setScore(score+1)} }> +{points}
          🌹
        </button>     
        <br /><br />

        <button onClick={  ()=>{setScore(score-10),setPoints(points +1)} 
      }> 
        Pay 10 to change from +1 to +2
         </button> 
     </main>
    </>

  );
}

export default App;
