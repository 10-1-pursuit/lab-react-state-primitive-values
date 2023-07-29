import React from "react";
import "./App.css";

function App () {
    return (
      <main>
        <p>Nicki's React State Lab</p>
{/* <h1>Current Score: {score} </h1> */}
<input type="button" value="+1" onClick={()=>{console.log("ok")}} style={{border: "2px solid green", color: "purple"}} />
{/* style={h} */}
{/* value={count} */}

      </main>
    );
}

export default App;
