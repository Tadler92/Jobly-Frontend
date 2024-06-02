import { useState, useEffect } from 'react'
import RoutesList from './RoutesList'
import NavBar from './NavBar'
import JoblyApi from './api'
import {jwtDecode} from 'jwt-decode'
import CurrUserContext from './CurrUserContext'
import useLocalStorage from './useLocalStorage'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  const [token, setToken] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [storedToken, setStoredToken] = useLocalStorage('user-token', null);
  const [applications, setApplications] = useState([]); 

  useEffect(() => {
    async function getCurrUserInfo() {
      try {
        let {username} = jwtDecode(token);
        // console.log('decoded user username', username)
        let currUserInfo = await JoblyApi.getCurrUser(username);
        console.log('current user info', currUserInfo);
        setCurrentUser(currUserInfo);
        setApplications(currUserInfo.user.applications);
      } catch (err) {
        console.log("Error getting user information", err)
      }
    }
    getCurrUserInfo();
  }, [token])

  async function login(loginData) {
    try {
      let token = await JoblyApi.getToken(loginData);
      // console.log('token in APP', token);
      setToken(token);
      setStoredToken(token);
      JoblyApi.token = token;
    } catch (err) {
      console.log('LOGIN ERROR', err);
    }
  }

  async function signup(signupData) {
    try {
      let token = await JoblyApi.register(signupData);
      // console.log('token in APP', token);
      setToken(token);
      setStoredToken(token);
      JoblyApi.token = token;
      console.log('new JoblyAPI token', JoblyApi.token)
    } catch (err) {
      console.log('SIGNUP ERROR', err);
    }
  }

  function logout() {
    setCurrentUser(null)
    setToken(null)
    setStoredToken(null)
  }

  return (
    <div className='App'>
      <div className='App-div'>
        <CurrUserContext.Provider value={{currentUser, setCurrentUser, applications, setApplications}} >
          <NavBar logout={logout} />
          <RoutesList login={login} signup={signup} />
        </CurrUserContext.Provider>
      </div>
    </div >
  )
}

export default App
