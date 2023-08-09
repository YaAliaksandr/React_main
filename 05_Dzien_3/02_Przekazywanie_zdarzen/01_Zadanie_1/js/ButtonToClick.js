import React from "react";
const ButtonToClick = ({ xxx }) => {
	const handleClick = () => {
		if (typeof xxx === "function") {
			xxx();
		}
	}

	return <>
		<button onClick={handleClick}>KLIK</button>
	</>
}

export default ButtonToClick