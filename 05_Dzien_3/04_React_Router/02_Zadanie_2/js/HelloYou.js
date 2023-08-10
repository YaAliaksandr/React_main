import React from 'react';
import { useParams } from 'react-router-dom';


export const HelloYou = () => {

	const { name } = useParams();
	return (<>
		<h1>{name}</h1>
	</>)
}

