import React from "react";
import { Link } from "react-router-dom";

export default function Character(props){

    return(

        <tr>
            <th scope="row">{props.character.characterId}</th>
            <td>{props.character.characterName}</td>
            <td>{props.character.description}</td>

            <td><button >View</button></td>  
            <td><button >Edit</button></td>  
            <td><button >Delete</button></td>         
        </tr>
    )

}