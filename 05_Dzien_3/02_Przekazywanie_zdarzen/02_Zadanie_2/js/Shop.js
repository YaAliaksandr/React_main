import React, { useState } from "react";
import { ShopItems } from "./ShopItem";


export const Shop = () => {
	const [list, setList] = useState([]);


	const addList = (response) => {
		setList((prev) => {
			return [...prev, response];
		})
	}


	return (<div>
		<ShopItems title="MacBook Pro" onBuy={addList} />
		<ShopItems title="Dell X5500" onBuy={addList} />
		<ShopItems title="Asus NT6000" onBuy={addList} />
		<ul>
			{list.map((it, index) => {
				return <li key={index}>{it}</li>
			})}
		</ul>
	</div>
	)

} 
