import React from "react";
import { useHistory, useParams } from "react-router";
import { useEffect } from "react";

export default function CharacterForm(props){
    
    const url = "http://localhost:8080/charactercreator";

    const history = useHistory();

    const params = useParams();

    const checkParamsToPopulateForm = () => {

        if(params.id && props.userCharacters.length > 0 && props.isEditing){
            
            const targetCharacter = props.userCharacters.find((character) => {return character.characterId.toString() === params.id.toString()});
            
            props.populateForm(targetCharacter);
            props.setParamsId(params.id)
        }

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
            description: props.characterDescription
        }

        console.log("added character")

        

      }

    const editCharacter = () => {

        console.log("edited character")
    }

      const cancel = () => {

        history.push("/characters");
        props.resetForm();
        props.setErrors([]);
        //when params are implemented, add something here to set params to undefined for back-to-back edits
        props.setParamsId(undefined);
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

                <div className="form-group">
                    <label htmlFor="character-description-form">Description: </label>
                    <input className="form-control" value={props.characterDescription} 
                    onChange={(event) => {props.setCharacterDescription(event.target.value)}}
                     type="text" id="character-description-form" name="character-description-form"></input>
                </div>
                <div><button className="submit-btn" type="submit">Submit</button></div>
                
            </form>

            <button className="cancel-btn" onClick={() => { cancel();}}>Cancel</button>
            
        </section>
        

    );

    

}