import React from 'react';

const Buttons = () => {
	const pierwszyEvent = () => {
		console.log("Pierwszy przycisk kliknięty")
	}

	const drugiEvent = () => {
		const a = prompt("Podaj pierwszą liczbę");
		const b = prompt("Podaj drugą liczbę");

		console.log(Math.pow(a, b));
	}

	const trzeciEvent = () => {
		console.log(window.innerWidth);
		console.log(window.innerHeight);
	}

	return (
		<>
			<button onClick={pierwszyEvent}>Klik</button>
			<button onClick={drugiEvent}>Klik</button>
			<button onClick={trzeciEvent}>Klik</button>
		</>
	)
}

export default Buttons;