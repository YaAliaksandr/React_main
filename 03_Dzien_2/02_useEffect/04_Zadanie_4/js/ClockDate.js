import React from "react";

const ClockDate = ({ date }) => {


	return (<>
		<h1>{date.getFullYear()}/{date.getMonth()}/{date.getDate()}</h1>
	</>)
}

export default ClockDate;
