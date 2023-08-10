import React, { useState, useEffect } from "react";
import getNames from "./data/names";

const Names = () => {
	const [names, setNames] = useState([]);

	useEffect(() => {
		getNames().then(data => {
			setNames(data);
		});
	}, [])

	return <>
		<ul className="list-group">
			{names.map((el, index) => <li key={index} className="list-group-item">{el}</li>)}
		</ul>
	</>
}

export default Names