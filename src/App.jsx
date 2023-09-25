import React, { useState } from "react";
import "./App.css";


function App () {
  const [count, setCount] = useState(1)
    
  function increaseCount() {
      setCount(prevCount => prevCount + 1)
  }

    return (
      <>
      <main>
        <div>Current Score:{count}</div>

        <div>
          <button onClick={increaseCount}> setCount</button>
        </div>

        <div>
          <button>Pay 10 points to change from +1 to +2</button>
        </div>
      </main>
      </>
    );
}

export default App;
