import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router';

export default function ViewCharacterPage(props) {

	const params = useParams();

	const checkParams = () => {

        if(params.id && props.userCharacters.length > 0){
            
            const characterToView = props.userCharacters.find((character) => {return character.characterId.toString() === params.id.toString()});
			
			
            props.setCharacterToView(characterToView);
			props.setParamsId(params.id);

			console.log(params.id)

			
        }

    }

	useEffect(checkParams, []);
	


	return (


		<div>
			<section>
				<h2>Name: </h2>
					<p>{props.characterToView.characterName}</p>
			</section>

			<section>
				<h3>Description: </h3>
					<p>{props.characterToView.description}</p>
			</section>

			<section>
			<h4>Strength: </h4>
				<p>{props.characterToView.strength}</p>
			</section>

			<section>
			<h4>Dexterity: </h4>
				<p>{props.characterToView.dexterity}</p>
			</section>

			<section>
			<h4>Constitution: </h4>
				<p>{props.characterToView.constitution}</p>
			</section>

			<section>
			<h4>Intelligence: </h4>
				<p>{props.characterToView.intelligence}</p>
			</section>

			<section>
			<h4>Wisdom: </h4>
				<p>{props.characterToView.wisdom}</p>
			</section>

			<section>
			<h4>Charisma: </h4>
				<p>{props.characterToView.charisma}</p>
			</section>

			<section>
			<h4>Armor Class: </h4>
				<p>{props.characterToView.armorClass}</p>
			</section>

			<section>
			<h4>Proficiency Bonus: </h4>
				<p>{props.characterToView.proficiencyBonus}</p>
			</section>

			<section>
			<h4>Speed: </h4>
				<p>{props.characterToView.speed}</p>
			</section>

			<section>
			<h4>Level: </h4>
				<p>{props.characterToView.level}</p>
			</section>

			<section>
			<h4>Hitpoints: </h4>
				<p>{props.characterToView.hitpoints}</p>
			</section>



		</div>	
			
		
	)
	
}
