import './App.css';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navigation from './Components/Navigation';
import HomePage from './Components/Pages/HomePage';
import LandingPage from './Components/Pages/LandingPage';
import LoginPage from './Components/Pages/LoginPage';
import AuthContext from './Components/Context/AuthContext'
import jwtDecode from "jwt-decode";

const LOCAL_STORAGE_TOKEN_KEY = "solarFarmToken";

function App() {

  let currentUserData = localStorage.getItem("userData");

  if( currentUserData ){
    currentUserData = JSON.parse( currentUserData );
  }

  const [loggedInUserData, setLoggedInUserData] = useState(currentUserData);

  

 



  return (
    <div className="App">
      
      <AuthContext.Provider value={loggedInUserData}>
        <BrowserRouter>
          <Navigation/>
          <Switch>
            <Route exact path="/">
              <LandingPage></LandingPage>
            </Route>
            <Route path="/home">
              <HomePage></HomePage>
            </Route>
            <Route path="/login">
              <LoginPage></LoginPage>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthContext.Provider>

    </div>
  );
}

export default App;