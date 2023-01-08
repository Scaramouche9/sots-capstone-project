import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router';

export default function ViewCharacterPage(props) {

	const params = useParams();
	const history = useHistory();

	const checkParams = () => {

        if(params.id && props.userCharacters.length > 0){
            
            const characterToView = props.userCharacters.find((character) => {return character.characterId.toString() === params.id.toString()});
			
			//displaySelectedCharacter(characterToView);
			
            props.setCharacterIdToView(params.id);

			
        }

    }

	const displaySelectedCharacter = (character) => {

		console.log(character);
		console.log(params.id)

		return (
			
			<h1> Name: </h1>
			
		)

	}

	useEffect(checkParams,[]);

	
}
