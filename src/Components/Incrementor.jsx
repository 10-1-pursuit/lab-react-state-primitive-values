import { useState } from "react";

function Incrementor() {
  let [count, setCount] = useState(0);
  let [paid, setPaid] = useState(1);
  let [changeText, setChangeText] = useState("")

  return (
    <main>

      <h1>Current Score: {count} </h1>
      {/* How I tried to toggle an error message */}
      <h2> {changeText} </h2> 
 
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
          if (count >= 10) {
            setPaid(paid + 1);
            setCount(count - 10)
            setChangeText("")
          }else{
           setChangeText("You can't afford that!")
          }
        }
        }
      >
        Pay 10 points to change from +{paid} to +{paid + 1}
      </button>

    </main>
  );
}

export default Incrementor;
