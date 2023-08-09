import React, { useState } from "react";

const Box = () => {
	const [bgc, setBgc] = useState("green");
	const [width, setWidth] = useState("500px");
	const [divHeight, setDivHeight] = useState("200px");

	const changeDiv = (bgc, width, height) => {
		setBgc(bgc);
		setWidth(width);
		setDivHeight(height);
	}

	return (<>
		<div style={{ backgroundColor: bgc, width: width, height: divHeight }}>

		</div>

		<button onClick={() => { changeDiv("orange", "200px", "300px") }}>200</button>
		<button onClick={() => { changeDiv("blue", "100px", "700px") }}>100</button>
		<button onClick={() => { changeDiv("green", "500px", "200px") }}>500</button>
	</>)

}

export default Box;