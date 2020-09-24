import React, {useState, useEffect} from 'react';
// import logo from './logo.svg';
import SignUp from './component/UserDetails/SignUp';
import Login from './component/UserDetails/Login';
import './App.css';
import SearchApp from './component/search/SearchApp';

function App() {

  const [appState, setAppState] = useState({
    isRegistered: false
  })

  useEffect(() => {
    // const localUser = JSON.parse(sessionStorage.getItem("user"))
    const localUser = JSON.parse(localStorage.getItem("user"))

    if(localUser !== null) {
      setAppState(
        {
          isRegistered: true
        }
      )
    }
    else{

    }
    // console.log(localUser)
    console.log("localUser:",localUser)
    // localStorage.removeItem("user")
  }, []);
  

  return (
    <div className="App">
      {!appState.isRegistered?<SignUp/>:null}
      {appState.isRegistered?<Login/>:null}
      <SearchApp/>
    </div>
  );
}

export default App;
