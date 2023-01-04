import React from "react";
import { Link } from "react-router-dom";

export default function Navigation(){
    
    return(

        <nav className="nav">
        <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
        </ul>
        </nav>

    );

}