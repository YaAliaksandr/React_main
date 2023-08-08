import React, { useState } from "react";

const ColorfulBoxes = () => {
	const [boxes, setBoxes] = useState([]);

	const handleGenerateBox = () => {
		const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

		setBoxes(prevState => [...prevState, randomColor]);
	}

	return <>
		<button onClick={handleGenerateBox}>Dodaj boxa!</button>

		{boxes.map((box, index) => {
			return <div key={index} style={{ width: '200px', height: '200px', backgroundColor: box }}></div>
		})}
	</>
}

export default ColorfulBoxes