import React from 'react';
import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import AuthContext from '../Context/AuthContext';

export default function LoginPage(props) {
	const [loginData, setLoginData] = useState({ username: '', password: '' });

	const auth = useContext(AuthContext);

	const history = useHistory();

	function handleSubmit(evt) {
		evt.preventDefault();

		console.log(loginData);

		fetch('http://localhost:8080/api/authenticate', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(loginData),
		})
			.then((response) => {
				if (response.status === 200) {
					return response.json();
				} else if (response.status === 403) {
					alert('Input username/password combination is invalid.');
				} else {
					console.log(response);
				}
			})
			.then((jwtContainer) => {
				const jwt = jwtContainer.jwt;
				console.log(jwt);
				const decodedJwt = jwtDecode(jwt);
				console.log(decodedJwt);

				const fullLoginData = {
					token: jwt,
					userData: decodedJwt,
				};

				localStorage.setItem('userData', JSON.stringify(fullLoginData));

				props.setLoggedInUserData(fullLoginData);
				history.push('/personal');
			});
	}

	function handleInputChange(evt) {
		const changedInput = evt.target;
		const loginDataCopy = { ...loginData };

		loginDataCopy[changedInput.id] = changedInput.value;

		setLoginData(loginDataCopy);
	}

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<h1>Login:</h1>
				<label htmlFor="username">Username: </label>
				<input id="username" />
				<label htmlFor="password">Password: </label>
				<input type="password" id="password" />
				<button>Log-in</button>
			</div>
		</form>
	);
}
