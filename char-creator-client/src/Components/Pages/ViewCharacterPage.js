import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router';

export default function ViewCharacterPage(props) {

	const params = useParams();
	const history = useHistory();

	const checkParams = () => {

        if(params.id && props.userCharacters.length > 0){
            
            const characterToView = props.userCharacters.find((character) => {return character.characterId.toString() === params.id.toString()});
			
			
            props.setCharacterToView(characterToView);
			props.setParamsId(params.id);

			console.log(params.id)

			
        }

    }

	useEffect(checkParams,[]);
	
	const character = props.characterToView.characterName; //this is just to make html elements less crowded


	return (

		<div>
			<h3> Name: </h3>
				<p> blebloo</p>
		</div>	
			
		
	)

	



	


	
}
