import React from "react";
import { Link, useHistory } from "react-router-dom";

export default function Character(props){

    const history = useHistory();

    return(

        <tr>
            <th scope="row">{props.character.characterId}</th>
            <td className="character-list-name">{props.character.characterName}</td>
            <td className="character-list-description">{props.character.description}</td>

            <td className="character-list-view-link" >
                <Link to={`/characters/view/${props.character.characterId}`} > View </Link>
            </td>  
            
            <td className="character-list-edit-link">
            <Link to={`/characters/edit/${props.character.characterId}`}> Edit </Link>
            </td> 

            <td className="character-list-delete-btn"><button >Delete</button></td>         
        </tr>
    )

}