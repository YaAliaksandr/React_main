import React, { useState } from "react";

const Counter = () => {
	const [counter, setCounter] = useState(10);

	const handlePlus = () => {
		setCounter(prevState => prevState + 1)
	}

	const handleMinus = () => {
		setCounter(prevState => prevState - 1)
	}

	const handleReset = () => {
		setCounter(10);
	}

	return <>
		<h2>Liczba kliknięć {counter}</h2>
		<button onClick={handlePlus}>+</button>
		<button onClick={handleMinus}>-</button>
		<button onClick={handleReset}>Reset</button>
	</>
}

export default Counter