import React from 'react';

const NumberInfo = ({ number }) => {
	const isPrimeNumber = (n) => {
		if (n === 1) { return false }
		else if (n === 2) { return true }
		else {
			for (let x = 2; x < n; x++) {
				if (n % x === 0) {
					return false;
				}
			}
			return true;
		}
	}


	return <>
		<hr />
		<ul>
			<li>{number}</li>

			{number % 2 === 0 ? <li>Parzysta</li> : <li>Nieparzysta</li>}

			{isPrimeNumber(number) && <li>Liczba pierwsza</li>}

			{Math.log2(number) % 1 === 0 && <li>Potęga liczby 2</li>}
		</ul>
		<hr />
	</>
}

export default NumberInfo