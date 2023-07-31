import { useState } from "react";

function Incrementor() {
let [count, setCount] = useState(0);
  let [paid, setPaid] = useState(1);


  return (
    <main>
      <h1>Current Score: {count} </h1>

      <button
        onClick={() => {
          setCount((count) => count + paid);
        }}
      >
        +{paid}
      </button>

      <br />
      <br />

      <button
        
        onClick={() => {
            if(count >= 10){
          setPaid(paid + 1);
         setCount(count -10)

            }
        }}
      >
        Pay 10 points to change from +{paid} to +{paid + 1}
      </button>
    </main>
  );
}

export default Incrementor;
