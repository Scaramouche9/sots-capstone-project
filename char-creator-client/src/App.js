import './App.css';
import { Switch, BrowserRouter, Route, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navigation from './Components/Navigation';
import Header from './Components/Header';
import HomePage from './Components/Pages/HomePage';
import LandingPage from './Components/Pages/LandingPage';
import LoginPage from './Components/Pages/LoginPage';
import CreateAccountPage from './Components/Pages/CreateAccountPage';
import UserCharactersPage from './Components/Pages/UserCharactersPage';
import AuthContext from './Components/Context/AuthContext';
import jwtDecode from 'jwt-decode';

const LOCAL_STORAGE_TOKEN_KEY = "";

export default function App() {

  const [user, setUser] = useState(null);
  const [restoreLoginAttemptCompleted, setRestoreLoginAttemptCompleted] = useState(false);

  const history = useHistory();

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

	return (
		<div className="App">
			<AuthContext.Provider value={auth}>
				<BrowserRouter>
					<Header />
					<Navigation />
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
						{/* <Route path="/account-edit">
							<AccountEditPage></AccountEditPage>
						</Route>
						<Route path="/account-view">
							<AccountViewPage></AccountViewPage>
						</Route>
						<Route path="/create-character">
							<CreateCharacter></CreateCharacter>
						</Route>
						<Route path="/update-character">
							<CreateCharacter></CreateCharacter>
						</Route> */}
						<Route path="/create-account">
							<CreateAccountPage></CreateAccountPage>
						</Route>
            <Route path="/characters">
              <UserCharactersPage user={user}/>
            </Route>
						{/* <Route path="/character-view">
							<ViewCharacterPage></ViewCharacterPage>
						</Route> */}
					</Switch>
				</BrowserRouter>
			</AuthContext.Provider>
		</div>
	);
}
