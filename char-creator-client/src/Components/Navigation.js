import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import AuthContext from './Context/AuthContext';
import { useContext } from 'react';

export default function Navigation(props) {
	const auth = useContext(AuthContext);
	const history = useHistory();

	const handleLogout = () => {
		//this is to fit multiple functions in the onClick of the logout button (can't use useHistory in App, so we use it here)

		auth.logout();
		history.push('/');
	};

	const resetEditingAndForm = () => {
		//this is to make sure the isEditing state is resetting properly for when the user moves between the edit and create pages

		props.setIsEditing(false);

		props.resetForm();
	};

	return (
		<nav className="nav">
			<a href="/home">Home</a>
			{!auth.user && <a href="/login">Login</a>}

			{auth.user && (
				<div>
					<div className="nav" id="log-nav">
						Logged in as: <strong>{auth.user.username}</strong>
						<button onClick={() => handleLogout()}>Logout</button>
					</div>

					<a href="/characters" className="nav">
						Characters List
					</a>
					<a
						href="/characters/add"
						className="nav"
						onClick={() => resetEditingAndForm()}
					>
						Create a New Character
					</a>
				</div>
			)}
			{/* I think account editing/viewing are stretch goals for now */}
			{/*
				<li>
					<Link to="/account-edit">Edit My Account</Link>
				</li>
				*/}
			{/*<li>
					<Link to="/account-view">View My Account</Link>
				</li>*/}

			{/* Viewing and editing/updating specific characters will be done through links in the character list page*/}
			{/*<li>
					<Link to="/update-character">Update my Character</Link>
				</li>
				*/}

			{!auth.user && (
				<a href="/create-account" className="nav">
					Create a New Account
				</a>
			)}
		</nav>
	);
}
