import React, { useState } from "react";
import "./App.css";

 const  App=()=> {

  const[score,setScore]=useState(0);
  const[incrementor,setIncrementor]=useState(1);
  const targetScore=100;


  const handleIncrement =()=>{
    setScore(score+ incrementor);
  };

    const handlePoints =()=>{
      if(score >= 10){
        setScore(score-10);
        setIncrementor(incrementor+1);
        
      
     }else{
     
     
       alert("You cant afford That!!!");
     }



    };

    const handleReset =()=>{

        setScore(0)
        setIncrementor(1);

    };

    const winner= score>=targetScore;
    return (
      <div className="App">
        <h1>My Clicker Game</h1>
        {winner ? (
                <div>
                  <h2>You Have WON!</h2>
                  <button onClick={handleReset}>Would You like to Play Again?</button>





                </div>
        ):(
              <div>
                <p>Current Score {score}</p>
                <button onClick={handleIncrement}>+{incrementor}</button>
                <button onClick={handlePoints}>
              Pay 10 points to change from +{incrementor} to +{incrementor + 1}

                </button>



              </div>



        )}


          
        







      </div>
    );



  };
    






  
    

export default App;
