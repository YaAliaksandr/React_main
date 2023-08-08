import React, { useEffect, useState } from 'react';

const CustomTitle = () => {
	const [counter, setCounter] = useState(1)

	useEffect(() => {
		document.title = counter;
	}, [counter])

	const handleClick = () => {
		setCounter(prevState => prevState + 1);
	}

	return <>
		<p
			onClick={handleClick}
			style={{ fontSize: counter * 1.2 + 'rem' }}>
			Kliknięto mnie już: {counter} razy
		</p>
	</>
}
export default CustomTitle;