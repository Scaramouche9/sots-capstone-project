import React from 'react';
import { Link, useHistory } from 'react-router-dom';

export default function Character(props) {
	const history = useHistory();

	return (
		<tr id="character-table">
			<th scope="row">{props.userCharacters.indexOf(props.character) + 1}</th>
			<td className="character-list-name">{props.character.characterName}</td>
			<td className="character-list-description">
				{props.character.description}
			</td>

			<td className="character-list-view-link">
				<Link to={`/characters/view/${props.character.characterId}`}>
					{' '}
					View{' '}
				</Link>
			</td>

			<td className="character-list-edit-link">
				<Link
					to={`/characters/edit/${props.character.characterId}`}
					onClick={() => props.setIsEditing(true)}
				>
					{' '}
					Edit{' '}
				</Link>
			</td>

			<td
				className="character-list-delete-btn"
				onClick={() => props.deleteCharacter(props.character)}
			>
				<button>Delete</button>
			</td>
		</tr>
	);
}
