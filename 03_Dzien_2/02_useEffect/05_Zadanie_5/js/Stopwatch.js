import React, { useState, useEffect } from "react";

const Stopwatch = () => {
	const [time, setTime] = useState(0)
	const [laps, setLaps] = useState([])
	const [isRunning, setIsRunning] = useState(true)


	useEffect(() => {
		let timer = setInterval(() => {
			if (isRunning) {
				setTime(prevState => prevState + 1);
			}
		}, 1000)

		return () => {
			clearInterval(timer);
		}
	}, [isRunning])

	const handleStop = () => {
		setIsRunning(false);
	}

	const handleStart = () => {
		setIsRunning(true);
	}

	const handleRestart = () => {
		setIsRunning(false);
		setTime(0);
		setLaps([]);
	}

	const handleLap = () => {
		if (isRunning) {
			setLaps(prevState => [...prevState, time])
		}
	}

	return <>
		<h1>Time: {time}s</h1>
		<div>
			<button onClick={handleLap}>Lap</button>
			<button onClick={handleStop}>Stop</button>
			<button onClick={handleRestart}>Restart</button>
			<button onClick={handleStart}>Start</button>
		</div>
		<h1>Laps</h1>
		<ul>
			{laps.map((el, index) => {
				return <li key={index}>{el}</li>
			})}
		</ul>
	</>
}

export default Stopwatch