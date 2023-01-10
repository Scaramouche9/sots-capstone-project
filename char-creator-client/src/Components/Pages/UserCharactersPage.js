import React, { useContext, useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Character from '../Character';
import AuthContext from '../Context/AuthContext';

export default function UserCharactersPage(props) {
	const userInfo = useContext(AuthContext);

	const history = useHistory();

	const [charactersFound, setCharactersFound] = useState(true);

	useEffect(() => {
		if (!userInfo) {
			history.push('/');
		} else {
			fetch(
				`http://localhost:8080/charactercreator/user/${props.user.userId}`,
				{
					method: 'GET',
					headers: {
						Authorization: 'Bearer ' + userInfo.user.token,
					},
				}
			)
				.then((response) => {
					if (response.status === 200) {
						return response.json();
					} else {
						props.setUserCharacters([]);
						setCharactersFound(false);
					}
				})
				.then((userCharactersList) => {
					if (userCharactersList) {
						props.setUserCharacters(userCharactersList);
					}
				});
		}
	}, [userInfo]);

	const deleteCharacter = (character) => {
		let confirmation = window.confirm(
			`Confirm deletion of ${character.characterName}?`
		);

		if (confirmation) {
			fetch(`http://localhost:8080/charactercreator/${character.characterId}`, {
				method: 'DELETE',
				headers: {
					Authorization: 'Bearer ' + userInfo.user.token,
				},
			}).then((response) => {
				if (response.status === 404) {
					props.setErrors([
						`Couldn't find character named ${character.characterName} (might already be deleted; refresh browser)`,
					]);
				} else {
					//don't think anything needs to be here since the list is updating already
				}
			});
		}
	};

	return (
		<div id="user-characters">
			<section id="errors">
				{props.errors.length > 0 ? (
					<ul>
						{props.errors.map((error) => {
							return <li key={error}>{error}</li>;
						})}
					</ul>
				) : null}
			</section>

			{charactersFound && (
				<table className="table table-dark">
					<thead className="thead-light">
						<tr>
							<th scope="col">ID</th>
							<th scope="col">Name</th>
							<th scope="col">Description</th>
							<th scope="col">View</th>
							<th scope="col">Edit</th>
							<th scope="col">Delete</th>
						</tr>
					</thead>

					<tbody id="list-contents">
						{props.userCharacters.map((character) => (
							<Character
								key={character.characterId}
								character={character}
								isEditing={props.isEditing}
								setIsEditing={props.setIsEditing}
								deleteCharacter={deleteCharacter}
							/>
						))}
					</tbody>
				</table>
			)}
			{!charactersFound && (
				<div>
					<p>
						Your login token may have expired, please relog to see your
						characters.
					</p>
				</div>
			)}
			{!props.userCharacters.length > 0 && (
				<div>
					<p>You have no existing characters.</p>
				</div>
			)}
		</div>
	);
}
