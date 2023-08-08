import React, { useState, useEffect } from 'react';

const NumberRandomInfo = () => {
	const [number, setNumber] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setNumber(Math.ceil(Math.random() * 5));
		}, 1000);

		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<div>
			{number >= 3 ? `${number} Większa lub równa 3` : `${number} Mniejsza od 3`}
		</div>
	);
}

export default NumberRandomInfo;