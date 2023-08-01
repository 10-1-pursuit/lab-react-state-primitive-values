import React, {useState} from "react";
import "./App.css";

function App () {

  const[score, setScore] = useState(0)
  const[points, setPoints] = useState(1)
  const[h2Text, setH2Text] = useState("")
  const[pText, setPText] = useState("")
  const[h3Text, setH3Text] = useState("")
  const[h1Text, setH1Text] = useState("")
  

  function handleWin(){
    if(score >= 99){
      setH2Text("You Win!")
      setH3Text("Play again?")
    }
  }
  function handleH3OnClick(){
    if(h3Text === "Play again?"){
      setH3Text("")
      setScore(score-score)
      setPoints(points-points+1)
      setH2Text("")
      setH1Text(`Last High Score: ${score}`)
    }
  }
  function handleIncrementationOfPoints(){
    if(score >= 10){
      setPoints(points+1)
      setScore(score-10)
    } 
    if(score < 10){
      setPText("You can't afford that!")
    }
  }
    function handleCantAffordRemove(){
      if(pText==="You can't afford that!"){
        setPText("")
      }
    }
    return (
      <main>
        <h1>Current Score: {score} </h1>
        <button onClick={ ()=>{
          setScore(score + points), handleWin()
        }
      }
        > 
        +{points} 
        </button>
          <br></br>
            {h2Text}
            <br></br>

        <h3 onClick={()=>{handleH3OnClick()}}>
            {h3Text}
            <br></br>
            <br></br>
            {h1Text}
        </h3>
        <br></br>
        <br></br>

        <button onClick={()=>{
          handleIncrementationOfPoints()}}>
          Pay 10 points to change from + {points} to + {points+1}
        </button>
          <br></br>
          <br></br>
          
        <p onClick={()=>{handleCantAffordRemove()}}>
            {pText}
        </p>
      </main>
    );
}

export default App;
