import React, { useState } from "react";


const ToDoList = () => {

	const [elementLi, setElemetsLi] = useState([]);


	const addTask = () => {

		setElemetsLi((prev) => {
			return [...prev, `Zadanie${prev.length + 1}`]
		})
	}



	return (<>
		<ul>
			{elementLi.map((it, index) => {
				return it = <li key={index}>{it} </li>;
			})}
		</ul>
		<button onClick={addTask}>Dodaj zadanie</button>
	</>)

}
export default ToDoList;