import React from 'react';
import { useState } from 'react';

import './App.css';

function App() {
	const [score, setScore] = useState(0);
	const [step, setStep] = useState(1);

	function handleCount() {
		setScore((c) => c + step);
	}

	function handleStep() {
		setStep((s) => {
			s + 1;
		});
	}

	return (
		<main>
			<h1>Current Score: {score}</h1>

			<button onClick={handleCount}>+{step}</button>

			<button onClick={handleStep}>
				Pay 10 points to change from +{step} to +{step + 1}
			</button>
		</main>
	);
}

export default App;
