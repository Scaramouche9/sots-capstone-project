import React from "react";
import { Link, useHistory } from "react-router-dom";

export default function Character(props){

    const history = useHistory();

    return(

        <tr>
            <th scope="row">{props.character.characterId}</th>
            <td>{props.character.characterName}</td>
            <td>{props.character.description}</td>

            <td><Link to={`/characters/${props.character.characterId}`} 
            onClick={() => {history.push(`/${props.character.characterId}`)}}>View</Link></td>  
            
            <td><button >Edit</button></td>  
            <td><button >Delete</button></td>         
        </tr>
    )

}