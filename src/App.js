import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/homescreen/HomeScreen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginScreen from './screens/loginscreen/LoginScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './screens/profilescreen/ProfileScreen';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if(userAuth) {
        // Logged in
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
      } else {
        // Logged out
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch])

  return (
    <div className='app'>
    <BrowserRouter>
      {!user ? (
        <LoginScreen />
      ) : (
        <Routes>
          <Route exact path="/profile" element={<ProfileScreen/>} />
          <Route exact path="/" element={<HomeScreen />} />
        </Routes>
      )}
    </BrowserRouter>
    </div>
  );
}


export default App;
