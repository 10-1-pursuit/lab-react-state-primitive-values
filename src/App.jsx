import React from "react";
import { useState } from 'react'
import "./App.css";
import Score from "./components/Score.jsx"
function App() {

  const [count, setCount] = useState(0)


  return (
    <main>
      <h1> Current Score : {count}</h1>

      <button onClick={(sythEvent) => { setCount(count + 1) }}>
        1+
      </button>

      <Score />
      <Alert />
    </main>
  );
}

export default App;
