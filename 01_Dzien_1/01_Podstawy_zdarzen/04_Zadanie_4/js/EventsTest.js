import React from "react";

const EventsTest = () => {
	const click = () => {
		console.log("click");
		alert("click");

	};
	const mouseOver = () => {
		console.log("mouseOver");

	}
	const mouseLeave = () => {
		console.log("mouse LEAVe");

	}
	const divStyle = {
		width: "100px",
		height: "100px",
		backgroundColor: "red",
	}

	return (<>
		<div onClick={click}
			onMouseOver={mouseOver}
			onMouseLeave={mouseLeave}
			style={divStyle} ></div>
	</>)
}
export default EventsTest;