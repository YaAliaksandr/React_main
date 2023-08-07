import React from "react";

const EventsTest = () => {
	const click = () => {
		console.log("click");
		alert("click");

	};
	const mouseOver = () => {
		console.log("mouseOver");
		// alert("mouseOver");
	}
	const mouseLeave = () => {
		console.log("mouse LEAVe");
		// alert("mouse LEAVe");
	}


	return (<>
		<div onClick={click} onMouseOver={mouseOver} onMouseLeave={mouseLeave} style={{ width: "100px", height: "100px", backgroundColor: "red" }} ></div>
	</>)
}
export default EventsTest;