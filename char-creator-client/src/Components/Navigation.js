import React from "react";
import { Link } from "react-router-dom";
import AuthContext from "./Context/AuthContext";
import { useContext } from "react";

export default function Navigation(){

    const auth = useContext(AuthContext);
    
    return(

        <nav className="nav">
        <ul>
            <li><Link to="/home">Home</Link></li>
            {!auth.user && (<li><Link to="/login">Login</Link></li>)}
            
            {auth.user && (

                <>
                <li>
                    <div>
                    Logged in as: <strong>{auth.user.username}</strong>
                    <button onClick={() => auth.logout()}>Logout</button>
                    </div>
                </li>
                <li><Link to="/characters">Characters List</Link></li>
                </>
                
            )}
            
        </ul>
        </nav>

    );

}