import React from 'react';
import axios from 'axios';
import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import AuthContext from '../Context/AuthContext';

export default function CreateAccountPage(props) {
	const [name, setName] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [confirm, setConfirm] = useState('');
	const [message, setMessage] = useState('');
	const history = useHistory();

	const handleSubmit = async (evt) => {
		evt.preventDefault();
		try {
			await axios.post('http://localhost:8080/api/authenticate', {
				name: name,
				username: username,
				password: password,
				confirm: confirm,
			});
			history.push('/');
		} catch (error) {
			if (error.response) {
				setMessage(error.response.data.message);
			}
		}
	};

	// function handleSubmit(evt) {
	// 	evt.preventDefault();

	// 	console.log(accountData);

	// 	fetch('http://localhost:8080/api/authenticate', {
	// 		method: 'POST',
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 		},
	// 		body: JSON.stringify(accountData),
	// 	})
	// 		.then((response) => {
	// 			if (response.status === 200) {
	// 				return response.json();
	// 			} else if (response.status === 403) {
	// 				alert('Input username/password combination is invalid.');
	// 			} else {
	// 				console.log(response);
	// 			}
	// 		})
	// 		.then((jwtContainer) => {
	// 			const jwt = jwtContainer.jwt;
	// 			console.log(jwt);
	// 			const decodedJwt = jwtDecode(jwt);
	// 			console.log(decodedJwt);

	// 			const fullAccountData = {
	// 				token: jwt,
	// 				userData: decodedJwt,
	// 			};

	// 			localStorage.setItem('userData', JSON.stringify(fullAccountData));

	// 			props.setLoggedInUserData(fullAccountData);
	// 			history.push('/personal');
	// 		});
	// }

	// function handleInputChange(evt) {
	// 	const changedInput = evt.target;
	// 	const accountDataCopy = { ...accountData };

	// 	accountDataCopy[changedInput.id] = changedInput.value;

	// 	setAccountData(accountDataCopy);
	// }

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<h1>Create a New Account</h1>
				<div>
					{' '}
					<label htmlFor="name">Name: </label>
					<input id="name" />
				</div>
				<div>
					{' '}
					<label htmlFor="username">Username: </label>
					<input id="username" />
				</div>
				<div>
					{' '}
					<label htmlFor="password">Password: </label>
					<input type="password" id="password" />
				</div>
				<div>
					{' '}
					<label htmlFor="confirm">Confirm Password: </label>
					<input type="password" id="confirm" />
				</div>
				<input type="file" name="upload" accept="image/*" />
				<button>Create My Account</button>
			</div>
		</form>
	);
}
