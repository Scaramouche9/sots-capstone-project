import './App.css';
import { Switch, BrowserRouter, Route, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navigation from './Components/Navigation';
import HomePage from './Components/Pages/HomePage';
import LandingPage from './Components/Pages/LandingPage';
import LoginPage from './Components/Pages/LoginPage';
import AuthContext from './Components/Context/AuthContext'
import jwtDecode from "jwt-decode";
import UserCharactersPage from './Components/Pages/UserCharactersPage';
import CharacterFormPage from './Components/Pages/CharacterFormPage';

const LOCAL_STORAGE_TOKEN_KEY = "";
const LOCAL_STORAGE_USER_ID = "userId";

export default function App() {

  const [user, setUser] = useState(null);
  const [restoreLoginAttemptCompleted, setRestoreLoginAttemptCompleted] = useState(false);

  const [errors, setErrors] = useState([]);

  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY);
    const userId = localStorage.getItem(LOCAL_STORAGE_USER_ID);
    if (token && userId) {
      login(token, userId);
    }
    setRestoreLoginAttemptCompleted(true);
  }, []);

    const login = (token, userId) => {

      localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, token);
      localStorage.setItem(LOCAL_STORAGE_USER_ID, userId);

      const { sub: username, authorities: authoritiesString } = jwtDecode(token);
    
      const roles = authoritiesString.split(',');
      
      const user = {

        userId,
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
      localStorage.removeItem(LOCAL_STORAGE_USER_ID);
      
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
            <Route path="/characters">
              <UserCharactersPage user={user}/>
            </Route>
            <Route path="/characters/create">
              <CharacterFormPage errors={errors} setErrors={setErrors}/>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthContext.Provider>

    </div>
  );
}