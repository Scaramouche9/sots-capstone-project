import React, { useContext } from "react";
import { useHistory, useParams } from "react-router";
import { useEffect } from "react";
import AuthContext from "../Context/AuthContext";

export default function CharacterForm(props){


    const url = "http://localhost:8080/charactercreator";

    const history = useHistory();

    const params = useParams();

    const userInfo = useContext(AuthContext);

    const checkParamsToPopulateForm = () => {

        if(params.id && props.userCharacters.length > 0 && props.isEditing){
            
            const targetCharacter = props.userCharacters.find((character) => {return character.characterId.toString() === params.id.toString()});
            
            props.populateForm(targetCharacter);
            props.setParamsId(params.id)
        }

    }




	const params = useParams();

	const checkParamsToPopulateForm = () => {
		if (params.id && props.userCharacters.length > 0 && props.isEditing) {
			const targetCharacter = props.userCharacters.find((character) => {
				return character.characterId.toString() === params.id.toString();
			});

			props.populateForm(targetCharacter);
			props.setParamsId(params.id);
		}
	};

	useEffect(checkParamsToPopulateForm, []);

	const handleSubmit = (event) => {
		event.preventDefault();

		if (props.isEditing === true) {
			editCharacter();
		} else {
			addCharacter();
		}
	};

	const addCharacter = () => {
		const newCharacter = {
			characterName: props.characterName,
			strength: props.strength,
			dexterity: props.dexterity,
			constitution: props.constitution,
			intelligence: props.intelligence,
			wisdom: props.wisdom,
			charisma: props.charisma,
			armorClass: props.armorClass,
			proficiencyBonus: props.proficiencyBonus,
			speed: props.speed,
			level: props.level,
			hitpoints: props.hitpoints,
			description: props.characterDescription,
		};

		console.log('added character');
		props.resetForm();
	};

	const editCharacter = () => {
		console.log('edited character');
	};

	const cancel = () => {
		history.push('/characters');
		props.resetForm();
		props.setErrors([]);
		//when params are implemented, add something here to set params to undefined for back-to-back edits
		props.setParamsId(undefined);
	};

	return (
		<section>
			<section id="errors">
				{props.errors.length > 0 ? (
					<ul>
						{props.errors.map((error) => {
							return <li key={error}>{error}</li>;
						})}
					</ul>
				) : null}
			</section>
			<form
				onSubmit={(event) => {
					handleSubmit(event);
				}}
			>
				<div className="form-group">
					<label htmlFor="character-name-form">Name: </label>
					<input
						className="form-control"
						value={props.characterName}
						onChange={(event) => {
							props.setCharacterName(event.target.value);
						}}
						type="text"
						id="character-name-form"
						name="character-name-form"
					/>
				</div>

				<div className="form-group">
					<label htmlFor="strength-form">Strength: </label>
					<input
						className="form-control"
						value={props.strength}
						onChange={(event) => {
							props.setStrength(event.target.value);
						}}
						type="number"
						id="strength-form"
						name="strength-form"
					></input>
				</div>

				<div className="form-group">
					<label htmlFor="dexterity-form">Dexterity: </label>
					<input
						className="form-control"
						value={props.dexterity}
						onChange={(event) => {
							props.setDexterity(event.target.value);
						}}
						type="number"
						id="dexterity-form"
						name="dexterity-form"
					></input>
				</div>

				<div className="form-group">
					<label htmlFor="constitution-form">Constitution: </label>
					<input
						className="form-control"
						value={props.constitution}
						onChange={(event) => {
							props.setConstitution(event.target.value);
						}}
						type="number"
						id="constitution-form"
						name="constitution-form"
					></input>
				</div>

				<div className="form-group">
					<label htmlFor="intelligence-form">Intelligence: </label>
					<input
						className="form-control"
						value={props.intelligence}
						onChange={(event) => {
							props.setIntelligence(event.target.value);
						}}
						type="number"
						id="intelligence-form"
						name="intelligence-form"
					></input>
				</div>

				<div className="form-group">
					<label htmlFor="wisdom-form">Wisdom: </label>
					<input
						className="form-control"
						value={props.wisdom}
						onChange={(event) => {
							props.setWisdom(event.target.value);
						}}
						type="number"
						id="wisdom-form"
						name="wisdom-form"
					></input>
				</div>

				<div className="form-group">
					<label htmlFor="charisma-form">Charisma: </label>
					<input
						className="form-control"
						value={props.charisma}
						onChange={(event) => {
							props.setCharisma(event.target.value);
						}}
						type="number"
						id="charisma-form"
						name="charisma-form"
					></input>
				</div>

				<div className="form-group">
					<label htmlFor="armor-class-form">Armor Class: </label>
					<input
						className="form-control"
						value={props.armorClass}
						onChange={(event) => {
							props.setArmorClass(event.target.value);
						}}
						type="number"
						id="armor-class-form"
						name="armor-class-form"
					></input>
				</div>

				<div className="form-group">
					<label htmlFor="proficiency-bonus-form">Proficiency Bonus: </label>
					<input
						className="form-control"
						value={props.proficiencyBonus}
						onChange={(event) => {
							props.setProficiencyBonus(event.target.value);
						}}
						type="number"
						id="proficiency-bonus-form"
						name="proficiency-bonus-form"
					></input>
				</div>

				<div className="form-group">
					<label htmlFor="speed-form">Speed: </label>
					<input
						className="form-control"
						value={props.speed}
						onChange={(event) => {
							props.setSpeed(event.target.value);
						}}
						type="number"
						id="speed-form"
						name="speed-form"
					></input>
				</div>

				<div className="form-group">
					<label htmlFor="level-form">Level: </label>
					<input
						className="form-control"
						value={props.level}
						onChange={(event) => {
							props.setLevel(event.target.value);
						}}
						type="number"
						id="level-form"
						name="level-form"
					></input>
				</div>

				<div className="form-group">
					<label htmlFor="hitpoints-form">Hitpoints: </label>
					<input
						className="form-control"
						value={props.hitpoints}
						onChange={(event) => {
							props.setHitpoints(event.target.value);
						}}
						type="number"
						id="hitpoints-form"
						name="hitpoints-form"
					></input>
				</div>

				<div className="form-group" id="description-text-area-container">
					<label htmlFor="character-description-form">Description: </label>
					<textarea
						className="form-control"
						value={props.characterDescription}
						onChange={(event) => {
							props.setCharacterDescription(event.target.value);
						}}
						type="text"
						id="character-description-form"
						name="character-description-form"
					></textarea>
				</div>

				<div className="form-group" id="image-add">
					<label htmlFor="image-form">Character's Image: </label>
					<input type="file" name="upload" accept="image/*" />
				</div>

				<div id="char-form-buttons">
					<button className="submit-btn" type="submit">
						Submit
					</button>

					<button
						className="cancel-btn"
						onClick={() => {
							cancel();
						}}
					>
						Cancel
					</button>
				</div>
			</form>
		</section>
	);
}





    


    useEffect(checkParamsToPopulateForm,[])

    const handleSubmit = (event) => {

        event.preventDefault();

        if(props.isEditing === true){

            editCharacter();
            
        }else{

            addCharacter();
        }

            
    }

    const addCharacter = () => {

        const newCharacter = {
            characterName: props.characterName,
            speciesId: props.species,
            classId: props.characterClass,
            backgroundId: props.background,
            alignmentId: props.alignment,
            strength: parseInt(props.strength),
            dexterity: parseInt(props.dexterity),
            constitution: parseInt(props.constitution),
            intelligence: parseInt(props.intelligence),
            wisdom: parseInt(props.wisdom),
            charisma: parseInt(props.charisma),
            armorClass: parseInt(props.armorClass),
            proficiencyBonus: parseInt(props.proficiencyBonus),
            speed: parseInt(props.speed),
            level: parseInt(props.level),
            hitpoints: parseInt(props.hitpoints),
            description: props.characterDescription,
            appUserId: props.user.userId
        }


        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept" : "application/json",
                Authorization: "Bearer " + userInfo.user.token
      
            },
            body: JSON.stringify(newCharacter)
            })
            .then((result) => {
                
                if(result.status === 201){
                    props.resetForm()
                    props.setErrors([])
                    history.push("/characters")
                } else{
                    result.json().then((errors) => {
                        props.setErrors(errors)
                    })
                }
            }) 
      }

    const editCharacter = () => {

        const editedCharacter = {
            characterId: parseInt(params.id), //edit needs this specifically
            characterName: props.characterName,
            speciesId: props.species,
            classId: props.characterClass,
            backgroundId: props.background,
            alignmentId: props.alignment,
            strength: parseInt(props.strength),
            dexterity: parseInt(props.dexterity),
            constitution: parseInt(props.constitution),
            intelligence: parseInt(props.intelligence),
            wisdom: parseInt(props.wisdom),
            charisma: parseInt(props.charisma),
            armorClass: parseInt(props.armorClass),
            proficiencyBonus: parseInt(props.proficiencyBonus),
            speed: parseInt(props.speed),
            level: parseInt(props.level),
            hitpoints: parseInt(props.hitpoints),
            description: props.characterDescription,
            appUserId: props.user.userId
        }

        fetch(url + `/characters/${params.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept" : "application/json",
                Authorization: "Bearer " + userInfo.user.token
      
            },
            body: JSON.stringify(editedCharacter)
            })
            .then((result) => {
                
                if(result.status === 204){
                    props.resetForm()
                    props.setErrors([])
                    history.push("/characters")
                } else{
                    result.json().then((errors) => {
                        props.setErrors(errors)
                    })
                }
            }) 
    }

      const cancel = () => {

        history.push("/characters");
        props.resetForm();
        props.setErrors([]);
        props.setParamsId(undefined);
      }

      const handleChangeSpecies = (event) => {

        props.setSpecies(parseInt(event.target.value))

      }
      const handleChangeClass = (event) => {

        props.setCharacterClass(parseInt(event.target.value))

      }

      const handleChangeBackground = (event) => {

        props.setBackground(parseInt(event.target.value))

      }

      const handleChangeAlignment = (event) => {

        props.setAlignment(parseInt(event.target.value))

      }

    return(
        
        <section>
            <section id="errors">{
            props.errors.length > 0 ?
            <ul>
                {props.errors.map((error) => {return <li key={error}>{error}</li>})}
            </ul>
            :
            null
        }
        </section>
            <form onSubmit={(event) => {handleSubmit(event)}}>
                <div className ="form-group">
                    <label htmlFor="character-name-form">Name: </label>
                    <input className="form-control" value={props.characterName} 
                    onChange={(event) => {props.setCharacterName(event.target.value)}}
                    type="text" id="character-name-form" name="character-name-form"/>
                </div>

                <div className = "form-group">
                    <label htmlFor="species-dropdown">Species: </label>
                    <select value={props.species} onChange={handleChangeSpecies} name="species-dropdown" id="species-dropdown">
                        {props.speciesArray && props.speciesArray.map (species => <option key={species.speciesId} value={species.speciesId}>{species.speciesName}</option>)}
                    </select>
                </div>

                <div className = "form-group">
                    <label htmlFor="classes-dropdown">Class: </label>
                    <select value={props.characterClass} onChange={handleChangeClass} name="classes-dropdown" id="classes-dropdown">
                        {props.classArray && props.classArray.map (charClass => <option key={charClass.classId} value={charClass.classId}>{charClass.className}</option>)}
                    </select>
                </div>

                <div className = "form-group">
                    <label htmlFor="backgrounds-dropdown">Background: </label>
                    <select value={props.background} onChange={handleChangeBackground} name="backgrounds-dropdown" id="backgrounds-dropdown">
                        {props.backgroundArray && props.backgroundArray.map (bg => <option key={bg.backgroundId} value={bg.backgroundId}>{bg.backgroundName}</option>)}
                    </select>
                </div>

                <div className = "form-group">
                    <label htmlFor="alignment-dropdown">Alignment: </label>
                    <select value={props.alignment} onChange={handleChangeAlignment} name="alignment-dropdown" id="alignment-dropdown">
                        <option key="1" value="1" >Lawful Good</option>
                        <option key="2" value="2" >Neutral Good</option>
                        <option key="3" value="3" >Chaotic Good</option>
                        <option key="4" value="4" >Lawful Neutral</option>
                        <option key="5" value="5" >True Neutral</option>
                        <option key="6" value="6" >Chaotic Neutral</option>
                        <option key="7" value="7" >Lawful Evil</option>
                        <option key="8" value="8" >Neutral Evil</option>
                        <option key="9" value="9" >Chaotic Evil</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="strength-form">Strength: </label>
                    <input className="form-control" value={props.strength} 
                    onChange={(event) => {props.setStrength(event.target.value)}}
                     type="number" id="strength-form" name="strength-form"></input>
                </div>

                <div className="form-group">
                    <label htmlFor="dexterity-form">Dexterity: </label>
                    <input className="form-control" value={props.dexterity} 
                    onChange={(event) => {props.setDexterity(event.target.value)}}
                     type="number" id="dexterity-form" name="dexterity-form"></input>
                </div>

                <div className="form-group">
                    <label htmlFor="constitution-form">Constitution: </label>
                    <input className="form-control" value={props.constitution} 
                    onChange={(event) => {props.setConstitution(event.target.value)}}
                     type="number" id="constitution-form" name="constitution-form"></input>
                </div>

                <div className="form-group">
                    <label htmlFor="intelligence-form">Intelligence: </label>
                    <input className="form-control" value={props.intelligence} 
                    onChange={(event) => {props.setIntelligence(event.target.value)}}
                     type="number" id="intelligence-form" name="intelligence-form"></input>
                </div>

                <div className="form-group">
                    <label htmlFor="wisdom-form">Wisdom: </label>
                    <input className="form-control" value={props.wisdom} 
                    onChange={(event) => {props.setWisdom(event.target.value)}}
                     type="number" id="wisdom-form" name="wisdom-form"></input>
                </div>

                <div className="form-group">
                    <label htmlFor="charisma-form">Charisma: </label>
                    <input className="form-control" value={props.charisma} 
                    onChange={(event) => {props.setCharisma(event.target.value)}}
                     type="number" id="charisma-form" name="charisma-form"></input>
                </div>

                <div className="form-group">
                    <label htmlFor="armor-class-form">Armor Class: </label>
                    <input className="form-control" value={props.armorClass} 
                    onChange={(event) => {props.setArmorClass(event.target.value)}}
                     type="number" id="armor-class-form" name="armor-class-form"></input>
                </div>

                <div className="form-group">
                    <label htmlFor="proficiency-bonus-form">Proficiency Bonus: : </label>
                    <input className="form-control" value={props.proficiencyBonus} 
                    onChange={(event) => {props.setProficiencyBonus(event.target.value)}}
                     type="number" id="proficiency-bonus-form" name="proficiency-bonus-form"></input>
                </div>

                <div className="form-group">
                    <label htmlFor="speed-form">Speed: </label>
                    <input className="form-control" value={props.speed} 
                    onChange={(event) => {props.setSpeed(event.target.value)}}
                     type="number" id="speed-form" name="speed-form"></input>
                </div>

                <div className="form-group">
                    <label htmlFor="level-form">Level: </label>
                    <input className="form-control" value={props.level} 
                    onChange={(event) => {props.setLevel(event.target.value)}}
                     type="number" id="level-form" name="level-form"></input>
                </div>

                <div className="form-group">
                    <label htmlFor="hitpoints-form">Hitpoints: </label>
                    <input className="form-control" value={props.hitpoints} 
                    onChange={(event) => {props.setHitpoints(event.target.value)}}
                     type="number" id="hitpoints-form" name="hitpoints-form"></input>
                </div>

                <div className="form-group" id="description-text-area-container">
                    <label htmlFor="character-description-form">Description: </label>
                    <textarea className="form-control" value={props.characterDescription} 
                    onChange={(event) => {props.setCharacterDescription(event.target.value)}}
                     type="text" id="character-description-form" name="character-description-form"></textarea>
                </div>
                <div><button className="submit-btn" type="submit">Submit</button></div>
                
            </form>

            <button className="cancel-btn" onClick={() => { cancel();}}>Cancel</button>
            
        </section>
        

    );

    

}
