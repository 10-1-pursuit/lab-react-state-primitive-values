// From Ultimate React Course by Jonas Schmedtmann

import { useState } from 'react';
import './App.css';

function App() {
	return (
		<div className='container'>
			<h1>Date Counter</h1>
			<Counter />
		</div>
	);
}

function Counter() {
	const [count, setCount] = useState(0);
	const [step, setStep] = useState(1);

	function handleStepInc() {
		setStep((s) => s + 1);
	}

	function handleStepDec() {
		if (step > 1) setStep((s) => s - 1);
	}

	function handleCountInc() {
		setCount((c) => c + step);
	}

	function handleCountDec() {
		setCount((c) => c - step);
	}

	function dateDaysFromNow(count) {
		const options = {
			weekday: 'short',
			month: 'short',
			day: 'numeric',
			year: 'numeric',
		};

		const convertCountMS = count * 24 * 60 * 60 * 1000;
		const dateNowMS = Date.now();

		const newMS = convertCountMS + dateNowMS;
		const newDate = new Date(newMS);

		const formatDate = newDate.toLocaleDateString('en-US', options);

		// Jonas' date solution:
		const date = new Date();
		date.setDate(date.getDate() + count);
		const formatDate2 = date.toDateString();

		return formatDate2;
	}

	function resetCounter() {
		window.location.reload();
	}

	return (
		<div className='counter'>
			<span>
				<button onClick={handleStepDec}>-</button> Step: {step}{' '}
				<button onClick={handleStepInc}>+</button>
			</span>
			<span>
				<button onClick={handleCountDec}>-</button> Count: {count}{' '}
				<button onClick={handleCountInc}>+</button>
			</span>
			<button onClick={resetCounter}>Reset</button>
			<p>
				{count === 0
					? 'Today is'
					: count === 1
					? `${count} day from today is`
					: count === -1
					? `${Math.abs(count)} day ago was`
					: count < -1
					? `${Math.abs(count)} days ago was`
					: `${count} days from today`}{' '}
				{dateDaysFromNow(count)}
			</p>
		</div>
	);
}

export default App;
