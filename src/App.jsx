import { useState } from "react";
import React from "react";
import "./App.css";

function App() {
  const [score,setScore]= useState(0)
  const [nextLevel,setnextLevel]= useState(1)

  return ( 
    <>
      <main>
        <h1>
          {/* React State Lab */}
          Current Score: {score}
        </h1>
        <button onClick={ (se) => {setScore(score+1)} }> +{nextLevel }
          +1🌹 
        </button>     
     </main>
    </>

  );
}

export default App;
