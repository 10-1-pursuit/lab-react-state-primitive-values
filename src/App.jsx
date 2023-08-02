import React, { useState } from "react";
import "./App.css";
import ClickerGame from "./Components/Clicker-Game";


function App() {

  
  return (
    <main>
      <p>Let's Play!</p>
      <div id="game-area">
      {<ClickerGame />}
      </div>
    </main>
  );
}

export default App;
