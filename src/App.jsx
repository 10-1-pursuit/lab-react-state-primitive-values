import React from 'react';
import { useState } from 'react';

import './App.css';

function App() {
	const [score, setScore] = useState(0);
	const [step, setStep] = useState(1);

	function handleCount() {
		if (score < 100) {
			setScore((c) => c + step);
		}
	}

	function handleStep() {
		if (score >= 10 && score < 100) {
			setScore((c) => c - 10);
			setStep((s) => {
				return s + 1;
			});
		} else {
			alert(`You can't afford that!`);
		}
	}

	function handleReset() {
		setScore(0);
		setStep(1);
	}

	return (
		<main>
			<h1>Current Score: {score}</h1>

			{score >= 100 ? (
				<>
					<h2>You Win!</h2>
					<button onClick={handleReset}>Play Again?</button>
				</>
			) : (
				<>
					<button onClick={handleCount}>+{step}</button>

					<button onClick={handleStep}>
						Pay 10 points to change from +{step} to +{step + 1}
					</button>
				</>
			)}
		</main>
	);
}

export default App;
