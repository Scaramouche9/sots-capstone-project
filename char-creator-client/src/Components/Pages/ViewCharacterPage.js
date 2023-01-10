import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import { Image } from 'cloudinary-react';

export default function ViewCharacterPage(props) {
	const params = useParams();

	const checkParams = () => {
		if (params.id && props.userCharacters.length > 0) {
			const characterToView = props.userCharacters.find((character) => {
				return character.characterId.toString() === params.id.toString();
			});

			props.setCharacterToView(characterToView);
			props.setParamsId(params.id);
		}
	};

	useEffect(checkParams, []);

	let targetSpeciesObject = props.speciesArray.find(
		(species) => parseInt(species.speciesId) === props.characterToView.speciesId
	);
	let targetClassObject = props.classArray.find(
		(charClass) => parseInt(charClass.classId) === props.characterToView.classId
	);
	let targetBackgroundObject = props.backgroundArray.find(
		(bg) => parseInt(bg.backgroundId) === props.characterToView.backgroundId
	);

	const alignmentArray = [
		{
			localId: 1,
			localAlignmentName: 'Lawful Good',
		},
		{
			localId: 2,
			localAlignmentName: 'Neutral Good',
		},
		{
			localId: 3,
			localAlignmentName: 'Chaotic Good',
		},
		{
			localId: 4,
			localAlignmentName: 'Lawful Neutral',
		},
		{
			localId: 5,
			localAlignmentName: 'True Neutral',
		},
		{
			localId: 6,
			localAlignmentName: 'Chaotic Neutral',
		},
		{
			localId: 7,
			localAlignmentName: 'Lawful Evil',
		},
		{
			localId: 8,
			localAlignmentName: 'Neutral Evil',
		},
		{
			localId: 9,
			localAlignmentName: 'Chaotic Evil',
		},
	];

	let targetAlignment = alignmentArray.find(
		(alignment) => alignment.localId === props.characterToView.alignmentId
	);

	return (
		<div className="single-view-wrapper">
			<div className="single-view">
				<section className="name-view">
					<h4>Name: {props.characterToView.characterName}</h4>
				</section>

				<section>
					<Image
						style={{ width: 200 }} //placeholder to keep uploaded images from being too large; change later
						cloudName="dr8dbzjws"
						publicId={props.characterToView.image}
					/>
				</section>

				<section className="description-view">
					<h4>Description: </h4>
					<p>{props.characterToView.description}</p>
				</section>

				<section className="species-view">
					<h4>Species: </h4>
					{targetSpeciesObject && <p>{targetSpeciesObject.speciesName}</p>}
				</section>

				<section className="class-view">
					<h4>Class: </h4>
					{targetClassObject && <p>{targetClassObject.className}</p>}
				</section>

				<section className="background-view">
					<h4>Background: </h4>
					{targetBackgroundObject && (
						<p>{targetBackgroundObject.backgroundName}</p>
					)}
				</section>

				<section className="alignment-view">
					<h4>Alignment: </h4>
					{targetAlignment && <p>{targetAlignment.localAlignmentName}</p>}
				</section>

				<section>
					<h4>Strength: {props.characterToView.strength}</h4>
				</section>

				<section>
					<h4>Dexterity: {props.characterToView.dexterity}</h4>
				</section>

				<section>
					<h4>Constitution: {props.characterToView.constitution}</h4>
				</section>

				<section>
					<h4>Intelligence: {props.characterToView.intelligence}</h4>
				</section>

				<section>
					<h4>Wisdom: {props.characterToView.wisdom}</h4>
				</section>

				<section>
					<h4>Charisma: {props.characterToView.charisma}</h4>
				</section>

				<section>
					<h4>Armor Class: {props.characterToView.armorClass}</h4>
				</section>

				<section>
					<h4>Proficiency Bonus: {props.characterToView.proficiencyBonus}</h4>
				</section>

				<section>
					<h4>Speed: {props.characterToView.speed}</h4>
					<p></p>
				</section>

				<section>
					<h4>Level: {props.characterToView.level}</h4>
				</section>

				<section>
					<h4>Hitpoints: {props.characterToView.hitpoints}</h4>
				</section>
			</div>
		</div>
	);
}
