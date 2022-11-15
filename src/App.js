import { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth, getAuthStateChanged, onAuthStateChanged } from "firebase/auth";

//Styles and components
import './App.css';
import CreateUserPage from './pages/CreateUser';
import LoginPage from './pages/Login';
import UserProfilePage from './pages/UserProfile';
import Header from './components/Header';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDY_zsbyE-QhS_mv_0-5r5c-6hPsxuT7w4",
  authDomain: "dwa-exercise-six.firebaseapp.com",
  projectId: "dwa-exercise-six",
  storageBucket: "dwa-exercise-six.appspot.com",
  messagingSenderId: "633596556954",
  appId: "1:633596556954:web:feb93eee6ea3d1cca39123"
};
  
const router = createBrowserRouter([
  {
    path: "/",
    element: <UserProfilePage />,
  },
  {
      path: "/login",
      element: <LoginPage />,
  },
  {
      path: "/create",
      element: <CreateUserPage />,
  },
]);
  
function App() {
  const [appInitialized, setAppInitialized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInformation, setUserInformation] = useState({});
  //ensure app is initialized when it is ready to be
  useEffect(() => { //only do after first render
    //initialize firebase
    initializeApp(firebaseConfig);
    setAppInitialized(true);
  }, [])

  //check to see if user is logged in
  //if logged in, load page and check user status
  //set state accordingly
  useEffect(() => {
    if(appInitialized) {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) =>{
        if(user) {
          //user is signed in, see docs for a list of available properties
          setUserInformation(user);
          setIsLoggedIn(true);
        }
        else {
          //user is signed out
          setUserInformation({});
          setIsLoggedIn(false);
        }
        //whenever state changes setLoading to false
        setIsLoading(false);
      })
    }
  }, [appInitialized])

  return (
    <div className="App">
      <Header/>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;