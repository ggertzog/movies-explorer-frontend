import './App.css'
import React,  { useState } from 'react';
import Profile from '../Profile/Profile';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import { Routes, Route } from 'react-router-dom';

export default function App() {

  const [loggedIn, setLoggedIn] = useState(true);
  


  return (
    <div className='root'>
      <Routes>
        <Route 
          path='/'
          element= {
            <Main 
              loggedIn={loggedIn}
            />
          }
        />
        <Route
          path='/movies'
          element= {
            <Movies 
              loggedIn={loggedIn}
            />
          }
        />
        <Route
          path='/saved-movies'
          element= {
            <SavedMovies 
              loggedIn={loggedIn}
            />
          }
        />
        <Route
          path='/signin'
          element= {
            <Login />
          }
        />
        <Route 
          path='/signup'
          element={
            <Register />
          }
        />
        <Route 
          path='/profile'
          element={
            <Profile 
              loggedIn={loggedIn}
            />
          }
        />
        <Route 
          path='/*'
          element={
            <NotFound />
          }
        />
      </Routes>
    </div>
  )
}
