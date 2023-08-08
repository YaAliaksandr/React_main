import React, { useState } from "react";

const CountThings = () => {
	const [bilans, setBilans] = useState(10000);
	const [age, setAge] = useState(27)

	const handleRich = () => {
		setBilans(prevState => prevState + 1000)
	}

	const handleAge = () => {
		setAge(prevState => prevState + 1)
	}

	return <>
		<p>💰 so much money: ${bilans}</p>
		<p>Age: {age}</p>

		<button onClick={handleRich}>Get rich!</button>
		<button onClick={handleAge}>Get older :(</button>
	</>
}

export default CountThings