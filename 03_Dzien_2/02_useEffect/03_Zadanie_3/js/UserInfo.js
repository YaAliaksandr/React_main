import React, { useEffect, useState } from "react";

const UserInfo = () => {
	const [name, setName] = useState('alex');
	const [surname, setSurname] = useState('Yakubouski');


	useEffect(() => {
		setName('ALEX');
		setSurname(() => {
			return 'YAKUBOUSKI'
		}
		)
	}, []);
	return (<>
		<p>{name} {surname}</p>
	</>)


}

export default UserInfo;