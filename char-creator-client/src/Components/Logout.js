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

	return (
		<div id="logout">
			{auth.user && (
				<div>
					Logged in as: <strong>{auth.user.username}</strong>
					<button id="logout-button" onClick={() => handleLogout()}>
						Logout
					</button>
				</div>
			)}
		</div>
	);
}
