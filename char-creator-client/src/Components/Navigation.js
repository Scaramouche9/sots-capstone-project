import React from "react";
import { Link, useHistory } from "react-router-dom";
import AuthContext from "./Context/AuthContext";
import { useContext } from "react";

export default function Navigation(){

    const auth = useContext(AuthContext);
    const history = useHistory();

    const handleLogout = () => {//this is to fit multiple functions in the onClick of the logout button (can't use useHistory in App, so we use it here)

        auth.logout();
        history.push("/");

    }
    
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
                    <button onClick={() => handleLogout()}>Logout</button>
                    </div>
                </li>
                <li><Link to="/characters">Characters List</Link></li>
                </>
                
            )}
            
        </ul>
        </nav>

    );

}