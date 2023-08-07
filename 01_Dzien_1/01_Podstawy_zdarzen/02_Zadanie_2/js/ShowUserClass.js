import React from "react";

const ShowUserFunc = ({ name, surname }) => {
	const buttonClick = () => {
		console.log(name)
		console.log(surname)
	}

	return (
		<>
			<button onClick={buttonClick}>Dane użytkownika</button>
		</>
	)
}


export default ShowUserFunc