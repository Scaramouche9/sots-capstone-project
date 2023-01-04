import './App.css';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navigation from './Components/Navigation';
import HomePage from './Components/Pages/HomePage';
import LandingPage from './Components/Pages/LandingPage';
import LoginPage from './Components/Pages/LoginPage';
import AuthContext from './Components/Context/AuthContext'
import jwtDecode from "jwt-decode";

const LOCAL_STORAGE_TOKEN_KEY = "";

export default function App() {

  const [user, setUser] = useState(null);
  const [restoreLoginAttemptCompleted, setRestoreLoginAttemptCompleted] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY);
    if (token) {
      login(token);
    }
    setRestoreLoginAttemptCompleted(true);
  }, []);

    const login = (token) => {

      localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, token);

      
      const { sub: username, authorities: authoritiesString } = jwtDecode(token);
    
      const roles = authoritiesString.split(',');
      const user = {
        username,
        roles,
        token,
        hasRole(role) {
          return this.roles.includes(role);
        }
      };
    
      console.log(user);
      setUser(user);
    
      return user;

    }

    const logout = () => {
      setUser(null);
      localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY);
    };
  
    const auth = {
      user: user ? { ...user } : null,
      login,
      logout
    };
  
    if (!restoreLoginAttemptCompleted) { //this makes sure that the login is restored BEFORE the app actually renders
      return null;
    } 
  


  return(
    <div className="App">
      
      <AuthContext.Provider value={auth}>
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