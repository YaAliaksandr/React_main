import React from 'react';
import { useParams } from 'react-router-dom';


const CheckAge = () => {

	const { age } = useParams();
	return (<>
		{age >= 18 && <h1>Pełnoletni</h1>}
		{age < 18 && <h1>NIE pełnoletni!!!!!!!!</h1>}

	</>)
}

export default CheckAge;