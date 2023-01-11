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
			<li>
				<Link to="/home">Home</Link>
			</li>
			{!auth.user && (
				<li>
					<Link to="/login">Login</Link>
				</li>
			)}

			{auth.user && (
				<>
					<li>
						<Link to="/characters">Characters List</Link>
					</li>
					<li>
						<Link to="/characters/add" onClick={() => resetEditingAndForm()}>
							Create a New Character
						</Link>
					</li>
				</>
			)}

			{!auth.user && (
				<li>
					<Link to="/create-account">Create a New Account</Link>
				</li>
			)}
		</nav>
	);
}
