import React, { useState } from "react";
import ButtonToClick from "./ButtonToClick";
const ButtonCounter = () => {
	const [counter, setCounter] = useState(0);

	const handleButtonClick = () => {
		setCounter(prevState => prevState + 1)
	}

	return <>
		<div>
			<h1>{counter}</h1>
			<ButtonToClick xxx={handleButtonClick} />
			<ButtonToClick xxx={handleButtonClick} />
		</div>
	</>
}

export default ButtonCounter





