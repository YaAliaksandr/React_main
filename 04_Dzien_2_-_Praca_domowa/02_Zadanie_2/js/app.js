import React, { Component, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";


function SpeedClickGame({ time }) {
	const [currentTime, setCurrentTime] = useState(time);
	const [points, setPoints] = useState(0);
	const [isDisabled, setIsDisabled] = useState(false);

	useEffect(() => {
		const intervalId = setInterval(() => {
			if (currentTime <= 0) {
				setIsDisabled(true);
				clearInterval(intervalId);
			} else {
				setCurrentTime(prevTime => prevTime - 50);
			}
		}, 50);

		return () => clearInterval(intervalId);
	}, [currentTime]);

	const handleClick = () => {
		setPoints(points + 1);
		setCurrentTime(currentTime - 50);
	};

	return (
		<div>
			<h1>Время: {currentTime}мс</h1>
			<button onClick={handleClick} disabled={isDisabled}>
				Нажми меня!
			</button>
			<h2>Очки: {points}</h2>
		</div>
	);
}

// Отображение компонента с атрибутом time, установленным в 2000
function App() {
	return <SpeedClickGame time={2000} />;
}

export default App;
const container = document.getElementById("app");
const root = createRoot(container);
root.render(<h1>Hello, World!</h1>);
