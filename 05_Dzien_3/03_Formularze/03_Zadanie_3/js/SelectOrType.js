import React, { useState } from "react";


export const SelectOrType = ({ items }) => {

	const [title, setTitle] = useState('');
	const [wid, setWid] = useState('');
	const [widText, setWidText] = useState('');


	const handleChange = (e) => {
		setTitle(e.target.value);
		console.log(e.target.value);
		setWid(e.target.value);

	}

	const stopForm = (e) => {
		e.preventDefault();

	}
	const btnClick = () => {
		if (widText !== title) {
			setWid('');
			setTitle(widText);
		}
	}


	return (<>
		<form onSubmit={stopForm}>
			<select value={title} onChange={handleChange}>
				{items.map((it, id) => {
					return <option key={id} value={it}>{it}</option>
				})}
				<option value="Inne">Inne</option>
			</select>
			<p>{title}</p>
			{wid === "Inne" && <> <input type="text" value={widText} onChange={(e) => { setWidText(e.target.value) }} /> <button onClick={btnClick}>BTN</button></>}

		</form>

	</>)


}