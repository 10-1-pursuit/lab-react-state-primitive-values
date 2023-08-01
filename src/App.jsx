import React, {useState} from "react";
import "./App.css";

function App () {
  const [score, setScore] = useState (0)

  const [points, setPoints] = useState (1)
  const [incrementValue, setincrementValue] = useState (points)
  console.log("Increment Value", incrementValue);

    return (



      <main>
        <p>React State Lab</p>
        <h1>Current Score: {score}</h1>

        <button onClick={ ()=> {setScore(score+points)}} >
          + {points}

          </button>
          <br/><br/>
<button  onClick={ ()=> {console.log("score+points")}} >
  Pay 10 points to change from + {points} to + {points+1}  
</button>

      </main>
    );
}

export default App;
