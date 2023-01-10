import React from "react";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import jwtDecode from "jwt-decode";
import AuthContext from "../Context/AuthContext";

export default function LoginPage(props){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const auth = useContext(AuthContext);

    const history = useHistory();

    const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("http://localhost:8080/authenticate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
  
    if (response.status === 200) {

      const { jwt_token, userId } = await response.json();
      auth.login(jwt_token, userId);
      props.setErrors([]);
      history.push("/characters");

    } else if (response.status === 403) {

      alert("Invalid username/password combination.");

    } else {

        alert("Invalid username/password combination.");

    }
  };

    return (
      <div>

        <form onSubmit={handleSubmit}>
            <div>

            <label htmlFor="username">User Name: </label>
            <input id="username"  onChange={(event) => setUsername(event.target.value)}/>
            <label htmlFor="password">Password: </label>
            <input type="password" id="password"  onChange={(event) => setPassword(event.target.value)}/>
            <button>Log In</button>

            </div>

        </form>

        <section id="login-page-messages">{
          props.errors.length > 0 ?
          <ul>
            {props.errors.map((message) => {return <li key={message}>{message}</li>})}
          </ul>
          :
          null
          }
        </section>

      </div>
    )
}
