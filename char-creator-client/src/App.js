import './App.css';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navigation from './Components/Navigation';
import Header from './Components/Header';
import HomePage from './Components/Pages/HomePage';
import LandingPage from './Components/Pages/LandingPage';
import LoginPage from './Components/Pages/LoginPage';
import CreateAccountPage from './Components/Pages/CreateAccountPage';
import AuthContext from './Components/Context/AuthContext';
import jwtDecode from 'jwt-decode';

const LOCAL_STORAGE_TOKEN_KEY = 'solarFarmToken';

function App() {
	let currentUserData = localStorage.getItem('userData');

	if (currentUserData) {
		currentUserData = JSON.parse(currentUserData);
	}

	const [loggedInUserData, setLoggedInUserData] = useState(currentUserData);

	return (
		<div className="App">
			<AuthContext.Provider value={loggedInUserData}>
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
						{/* <Route path="/character-view">
							<ViewCharacterPage></ViewCharacterPage>
						</Route> */}
					</Switch>
				</BrowserRouter>
			</AuthContext.Provider>
		</div>
	);
}

export default App;