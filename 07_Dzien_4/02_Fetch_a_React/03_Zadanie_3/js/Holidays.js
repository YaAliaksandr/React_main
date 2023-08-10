import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

export const Holidays = () => {
	const [holidays, setHolidays] = useState([]);
	const [code, setCode] = useState("PL");
	useEffect(() => {
		fetch(`https://fer-api.coderslab.pl/v1/holidays?key=e92601251-c0a2-4s63-v73f-54041195480f&country=${code}`)
			.then((res) => res.json())
			.then((response) => {
				setHolidays(response.holidays);
			});
	}, [code]);

	const handleCodeChange = (e) => {
		setCode(e.target.value);
	};
	return (
		<>
			<select value={code} onChange={handleCodeChange}>
				<option value="PL">PL</option>
				<option value="GB">GB</option>
				<option value="US">US</option>
			</select>

			<ul className="list">
				{holidays.map((el, index) => <li key={index}>
					<h3 className="holiday-name"> {el.name}</h3>
					<div className="holiday-date">{el.date}</div>
				</li>)}
			</ul>
		</>
	);
};

