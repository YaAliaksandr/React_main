import React, { useEffect, useState } from 'react';
import FakeAPI from "./data/fakeAPI.js";

const AccountData = () => {
	const [data, setData] = useState(false)

	useEffect(() => {
		// FakeAPI.then( response => {
		//   setData(response);
		//   console.log(response);
		// });

		fetch('https://dummyjson.com/products')
			.then(response => response.json())
			.then(response => {
				console.log(response.products);
				setData(response.products);
			})
	}, [])

	return <>
		{data
			? <table>
				<thead>
					<tr>
						<td style={{ border: '1px solid red', padding: '10px' }}>Obrazek</td>
						<td style={{ border: '1px solid red', padding: '10px' }}>Title</td>
						<td style={{ border: '1px solid red', padding: '10px' }}>Price</td>
						<td style={{ border: '1px solid red', padding: '10px' }}>Stock</td>
						<td style={{ border: '1px solid red', padding: '10px' }}>Rating</td>
					</tr>
				</thead>
				<tbody>
					{data.map((el) => {
						return <tr key={el.id}>
							<td style={{ border: '1px solid red', padding: '10px' }}>
								<img src={el.thumbnail} width="50px" height="30px" />
							</td>
							<td style={{ border: '1px solid red', padding: '10px' }}>{el.title}</td>
							<td style={{ border: '1px solid red', padding: '10px' }}>{el.price}</td>
							<td style={{ border: '1px solid red', padding: '10px' }}>{el.stock}</td>
							<td style={{ border: '1px solid red', padding: '10px' }}>{el.rating}/5</td>
						</tr>
					})}
				</tbody>
			</table>
			: <>Brak danych</>}
	</>
}

export default AccountData