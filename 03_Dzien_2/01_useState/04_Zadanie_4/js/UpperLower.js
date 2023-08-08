import React, { useState } from "react";

const UpperLower = () => {
	const str = "Napis";
	const [upper, setUpper] = useState(str);


	const getUpper = () => {
		setUpper(upper.toUpperCase());
	}
	const getLower = () => {
		setUpper(upper.toLowerCase());
	}


	return (<>
		<h2>{upper}</h2>
		<button onClick={getUpper}>"Uppercase"</button>
		<button onClick={getLower}>"Lowercase</button>
	</>)

}

export default UpperLower;