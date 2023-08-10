import React, { useState } from "react";

export const AddCar = () => {
	const [name, setName] = useState('');
	const [brand, setBrand] = useState('');
	const [type, setType] = useState('');
	const [hp, setHp] = useState('');

	const onSend = (e) => {
		e.preventDefault();
		console.log(name, brand);
		fetch('http://localhost:3000/cars', {
			method: "POST",
			body: JSON.stringify({
				name: name,
				brand: brand,
				engine: {
					type: type,
					hp: hp
				}
			}),
			headers: {
				"Content-Type": "application/json"
			}
		}).then(res => res.json()).then(r1 => console.log(r1));

	}



	return (<>
		<form onSubmit={onSend}>
			<input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
			<input type="text" placeholder="brand" value={brand} onChange={(e) => setBrand(e.target.value)} />
			<input type="text" placeholder="type" value={type} onChange={(e) => setType(e.target.value)} />
			<input type="text" placeholder="HP" value={hp} onChange={(e) => setHp(e.target.value)} />
			<button type="submit" >dsfjk</button>
		</form>
	</>)

}