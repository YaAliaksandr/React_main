import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { AddCar } from "./AddCar";


const App = () => {

	const [cars, setCars] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3000/cars').then(res => res.json()).then(r2 => setCars(r2))

	}, [])


	return (<>

		<ul>
			{
				cars.map((it, ind) => <div key={ind}>{it.brand} {it.name} </div>)
			}
		</ul>
		<AddCar />


	</>)
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
