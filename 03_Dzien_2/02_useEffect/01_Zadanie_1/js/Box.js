import React, { useEffect, useState } from 'react';

const Box = () => {
	const [color, setColor] = useState('cornflowerblue')

	useEffect(() => {
		const timer = setTimeout(() => {
			setColor('tomato')
		}, 2000);

		return () => {
			clearTimeout(timer);
		}
	}, [])

	return <div style={{ width: '100px', height: '100px', backgroundColor: color }}></div>
}
export default Box;