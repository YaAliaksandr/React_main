import React, { useState } from "react";

const Numbers = () => {
	const arr = [1, 54, 76, 24, 63, 4, 54, 82, 36, 13, 80, 10, 69, 4, 23, 40];


	const [val, setVal] = useState([]);

	const showAll = () => {
		setVal([...arr]);
	}

	const showPar = () => {
		setVal(() => {

			const newArr = [...arr].filter((it) => it % 2 === 0)
			return newArr;
		})
	}
	const showNotPar = () => {
		setVal(() => {

			const newArr = [...arr].filter((it) => it % 2 !== 0)
			return newArr;
		})
	}


	return (<>
		<ul>
			{val.map((it, ind) => {
				return it = <li key={ind}>{it}</li>
			})}
		</ul>

		<button onClick={showAll}>Pokaż wszystkie</button>
		<button onClick={showPar}>Pokaż tylko parzyste</button>
		<button onClick={showNotPar}>Pokaż nieparzyste</button>
	</>)

}
export default Numbers;