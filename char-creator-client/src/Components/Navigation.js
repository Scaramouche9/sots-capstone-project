import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
	return (
		<nav className="nav">
			<ul>
				<li>
					<Link to="/home">Home</Link>
				</li>
				<li>
					<Link to="/login">Login</Link>
				</li>
				<li>
					<Link to="/account-edit">Edit My Account</Link>
				</li>
				<li>
					<Link to="/account-view">View My Account</Link>
				</li>
				<li>
					<Link to="/create-character">Create a New Character</Link>
				</li>
				<li>
					<Link to="/update-character">Update my Character</Link>
				</li>
				<li>
					<Link to="/create-account">Create a New Account</Link>
				</li>
				<li>
					<Link to="/character-view">View My Character</Link>
				</li>
			</ul>
		</nav>
	);
}
