import React from "react";


const HoverEvent = () => {
	const mouseOver = () => {
		console.log("Najechano na przycisk!");
		alert("Najechano na przycisk!")
	}

	return (<>
		<button onMouseOver={mouseOver}>Hi Butoon</button>
	</>)
}

export default HoverEvent;