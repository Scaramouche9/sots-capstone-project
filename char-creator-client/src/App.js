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
import CharacterForm from './Components/Pages/CharacterForm';
import ViewCharacterPage from './Components/Pages/ViewCharacterPage';



const LOCAL_STORAGE_TOKEN_KEY = "";
const LOCAL_STORAGE_USER_ID = "userId";

export default function App() {

  const [user, setUser] = useState(null);
  const [restoreLoginAttemptCompleted, setRestoreLoginAttemptCompleted] = useState(false);

  const [errors, setErrors] = useState([]);

  const history = useHistory();

  const [characterToView, setCharacterToView] = useState([]);
  const [characterIdToEdit, setCharacterIdToEdit] = useState();//these might change with params

  const [paramsId, setParamsId] = useState();

  const [isEditing, setIsEditing] = useState(false);

  

  const [userCharacters, setUserCharacters] = useState([]);//for the UserCharactersPage AND ViewCharacterPage

  //the following are states for character model
  const [characterName, setCharacterName] = useState("");
  const [strength, setStrength] = useState("");
  const [dexterity, setDexterity] = useState("");
  const [constitution, setConstitution] = useState("");
  const [intelligence, setIntelligence] = useState("");
  const [wisdom, setWisdom] = useState("");
  const [charisma, setCharisma] = useState("");
  const [armorClass, setArmorClass] = useState("");
  const [proficiencyBonus, setProficiencyBonus] = useState("");
  const [speed, setSpeed] = useState("");
  const [level, setLevel] = useState("");
  const [hitpoints, setHitpoints] = useState("");
  const [characterDescription, setCharacterDescription] = useState("");
  //still need states for species, class, background, alignment

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
    
      setUser(user);
    
      return user;

    }

    const logout = () => {
      setUser(null);
      localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY);
      localStorage.removeItem(LOCAL_STORAGE_USER_ID);
      setUserCharacters(null);
      
    };
  
    const auth = {
      user: user ? { ...user } : null,
      login,
      logout
    };
  
    if (!restoreLoginAttemptCompleted) { //this makes sure that the login is restored BEFORE the app actually renders
      return null;
    } 

    const resetForm = () => {
      setCharacterName("");
      setStrength("");
      setDexterity("");
      setConstitution("");
      setIntelligence("");
      setWisdom("");
      setCharisma("");
      setArmorClass("");
      setProficiencyBonus("");
      setSpeed("");
      setLevel("");
      setHitpoints("");
      setCharacterDescription("");

      setIsEditing(false);

    }

    const populateForm = (character) => {
      
      setCharacterName(character.characterName);
      setStrength(character.strength);
      setDexterity(character.dexterity);
      setConstitution(character.constitution);
      setIntelligence(character.intelligence);
      setWisdom(character.wisdom);
      setCharisma(character.charisma);
      setArmorClass(character.armorClass);
      setProficiencyBonus(character.proficiencyBonus);
      setSpeed(character.speed);
      setLevel(character.level);
      setHitpoints(character.hitpoints);
      setCharacterDescription(character.description);
      
    }
    

	return (
		<div className="App">
			<AuthContext.Provider value={auth}>
				<BrowserRouter>
					<Header />
					<Navigation isEditing={isEditing} setIsEditing={setIsEditing} resetForm={resetForm}/>
					<Switch>

            <Route exact path="/characters/view/:id">
							<ViewCharacterPage 
              characterToView={characterToView} 
              setCharacterToView={setCharacterToView}
              userCharacters={userCharacters} 
              setUserCharacters={setUserCharacters} 
              paramsId={paramsId} 
              setParamsId={setParamsId}
             />
						</Route>

            <Route exact path={["/characters/add", "/characters/edit/:id"]}>
            <CharacterForm
              characterName={characterName}
              setCharacterName={setCharacterName}
              strength={strength}
              setStrength={setStrength}
              dexterity={dexterity}
              setDexterity={setDexterity}
              constitution={constitution}
              setConstitution={setConstitution}
              intelligence={intelligence}
              setIntelligence={setIntelligence}
              wisdom={wisdom}
              setWisdom={setWisdom}
              charisma={charisma}
              setCharisma={setCharisma}
              armorClass={armorClass}
              setArmorClass={setArmorClass}
              proficiencyBonus={proficiencyBonus}
              setProficiencyBonus={setProficiencyBonus}
              speed={speed}
              setSpeed={setSpeed}
              level={level}
              setLevel={setLevel}
              hitpoints={hitpoints}
              setHitpoints={setHitpoints}
              characterDescription={characterDescription}
              setCharacterDescription={setCharacterDescription}

              errors={errors}
              setErrors={setErrors}

              resetForm={resetForm}
              paramsId={paramsId}
              setParamsId={setParamsId}
              isEditing={isEditing}
              setIsEditing={setIsEditing}

              populateForm={populateForm}
              userCharacters={userCharacters}
              
              />
            </Route>

            <Route exact path="/characters">
              <UserCharactersPage user={user} userCharacters={userCharacters} setUserCharacters={setUserCharacters} isEditing={isEditing} setIsEditing={setIsEditing}/>
						</Route>


            <Route path="/home">
							<HomePage></HomePage>
						</Route>

            <Route path="/login">
							<LoginPage></LoginPage>
						</Route>

            <Route path="/create-account">
							<CreateAccountPage/>
						</Route>

						<Route exact path="/">
							<LandingPage></LandingPage>
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

          </Switch>
        </BrowserRouter>
      </AuthContext.Provider>

    </div>
  );
}



