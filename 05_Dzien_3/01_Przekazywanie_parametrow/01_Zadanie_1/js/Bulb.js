import React, { useState } from "react";

const Bulb = () => {
	const [bulbOn, setBulbOn] = useState(false)

	return <>
		<div style={{ backgroundColor: bulbOn ? 'yellow' : 'white', width: '100px', height: '100px' }}>
			<button onClick={() => setBulbOn(prevState => !prevState)}>
				{bulbOn ? "Off" : "On"}
			</button>
		</div>
	</>
}

export default Bulb