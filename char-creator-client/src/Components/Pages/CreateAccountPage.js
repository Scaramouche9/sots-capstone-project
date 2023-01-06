import React from 'react';
//import axios from 'axios';
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

	/*const handleSubmit = async (evt) => {
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
				<button>Create My Account</button>
			</div>
		</form>
	);

	*/
}
