import React, { useState } from 'react';
import YouWin from './You-Win';



export default function ClickerGame() {

    const [score, setScore] = useState(0);
    const [incrementValue, setIncrementValue] = useState(1);

    const Clicker = () => {
        return (
            <div>
                <button onClick={() => setScore(score + incrementValue)}> +{incrementValue}</button>
                <br />
                <br />
                <button onClick={() => {
                    score >= 10 ? (setScore(score - 10), setIncrementValue(incrementValue + 1)) : window.alert("You can't afford that");
                }
                }>
                    Pay 10 points to change from +{incrementValue} to +{incrementValue + 1} </button>
            </div>
        )
    }

    return (
        <>
            <h1>Current Score: {score}</h1 >
            <br />
            <div>
                {score >= 100 ? <YouWin /> : <Clicker />}
            </div>
        </>
    );
}