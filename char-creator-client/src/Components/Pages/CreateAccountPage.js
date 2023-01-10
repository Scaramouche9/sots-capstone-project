import React, { useEffect } from 'react';
//import axios from 'axios';
import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import AuthContext from '../Context/AuthContext';

export default function CreateAccountPage(props) {
	const [newUsername, setNewUsername] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const [confirm, setConfirm] = useState('');
	const [messages, setMessages] = useState([]);
	const history = useHistory();

	const handleSubmit = async (evt) => {
		evt.preventDefault();

		setMessages([]);

		if (newPassword === confirm) {
			const response = await fetch('http://localhost:8080/create_account', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					username: newUsername,
					password: newPassword,
				}),
			});

			if (response.status === 201) {
				setMessages([]); //clears error messages
				setMessages([
					'Account created successfully! Please continue to the login page.',
				]);
			} else {
				response.json().then((errors) => {
					setMessages(errors);
				});
			
				if (response.status === 201) {

				setMessages([]);//clears messages on this page
				props.setErrors([]);
				props.setErrors(["Account created successfully! Please login to continue."]); //adds message to login page and redirects
				history.push('/login');

				} else {

					response.json().then((errors) => {
						setMessages(errors)

				})
			}

			resetInputs();
		} else {
			setNewPassword('');
			setConfirm(''); //only reset the password and confirm form fields if they don't match (leave username as is)
		}
	};

	const resetInputs = () => {
		setNewUsername('');
		setNewPassword('');
		setConfirm('');
	};

	return (
		<section id="create-account-section">
			<form onSubmit={handleSubmit}>
				<div>
					<h2>Create a New Account</h2>
					<div>
						{' '}
						<label htmlFor="username">Username: </label>
						<input
							id="username"
							value={newUsername}
							onChange={(event) => setNewUsername(event.target.value)}
						/>
					</div>
					<div>
						{' '}
						<label htmlFor="password" value={newPassword}>
							Password:{' '}
						</label>
						<input
							type="password"
							id="password"
							value={newPassword}
							onChange={(event) => setNewPassword(event.target.value)}
						/>
					</div>
					<div>
						{' '}
						<label htmlFor="confirm" value={confirm}>
							Confirm Password:{' '}
						</label>
						<input
							type="password"
							id="confirm"
							value={confirm}
							onChange={(event) => setConfirm(event.target.value)}
						/>
					</div>
					<button>Create My Account</button>
				</div>
			</form>

			<section id="create-account-messages">
				{messages.length > 0 ? (
					<ul>
						{messages.map((message) => {
							return <li key={message}>{message}</li>;
						})}
					</ul>
				) : null}
			</section>
		</section>
	);
}
