import React, { useContext, useState, useEffect } from "react";
import {Link, useHistory} from "react-router-dom";
import Character from "../Character";
import AuthContext from "../Context/AuthContext";

export default function UserCharactersPage(props){

    const userInfo = useContext(AuthContext)

    const [userCharacters, setUserCharacters] = useState([]);

    const history = useHistory();

    useEffect(() => {

        if (!userInfo) {
            history.push("/");
        } else {

            fetch(`http://localhost:8080/charactercreator/user/1`, {
                method: "GET",
                headers: {
                    Authorization: "Bearer " + userInfo.user.token
                }
            })
                .then(response => {
                    if (response.status === 200) {
                        return response.json();
                    } else {
                        console.log(response); //need to implement a message to the user if they have no characters !!
                    }
                })
                .then(userCharactersList => setUserCharacters(userCharactersList));
        }
    }, [userInfo]);

    return(

        <div>

         <table className="table table-dark">
            <thead className="thead-light">

                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">View</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                </tr>
                </thead>

                <tbody id="list-contents">

                {userCharacters.map (character =>
                <Character key={character.characterId} character={character}/>
                )}

                </tbody>
        </table>
        </div>
    )
}