import React from "react";


export const ShopItems = ({ title, onBuy }) => {
	// const [buy,setBuy]=useState(false);


	const check = () => {
		if (typeof onBuy === 'function') {


			onBuy(title);
		}


	}

	return (<>
		<div>
			<h1>{title}</h1>
			<button onClick={check}>Kup</button>
		</div>

	</>)

} 