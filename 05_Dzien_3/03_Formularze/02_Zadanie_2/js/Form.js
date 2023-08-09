import React, { useState } from "react";
import FakeAPI from "./data/fakeAPI";
const Form = () => {
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [success, setSuccess] = useState(null);

	const sendForm = (e) => {
		e.preventDefault();

		if (name.length <= 2) {
			setError("Login jest krótszy niż wymagane 2 znaki")
		} else if (password.length <= 4) {
			setError("Hasło jest krótsze niż wymagane 4 znaki")
		} else {
			setError("");

			FakeAPI.login({
				username: name,
				password: password
			}).then(user => {
				setError("");
				setSuccess(`Witaj ${user.name} ${user.surname} !`)
			}).catch(err => {
				setError(err);
			})
		}
	}

	return <>
		{success ? <>{success}</> : <>
			<div>{error}</div>
			<form onSubmit={sendForm}>
				<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
				<input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
				<button type="submit">Zaloguj</button>
			</form>
		</>}

	</>
}

export default Form;