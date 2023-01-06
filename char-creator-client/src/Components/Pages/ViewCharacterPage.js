import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router';

export default function ViewCharacterPage(props) {

	const params = useParams();
	const history = useHistory();

	const checkParams = () => {

        if(params.id && props.userCharacters.length > 0){
            
            const characterToView = props.userCharacters.find((character) => {return character.characterId.toString() === params.id.toString()});
            
			displaySelectedCharacter(characterToView);
            props.setCharacterIdToView(params.id);

			
        }

    }

	useEffect(checkParams,[]);


	const displaySelectedCharacter = (character) => {

		return (
			<>
			<div>Name</div>
			</>
		)




	}

	
}
