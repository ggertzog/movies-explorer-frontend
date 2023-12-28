import './App.css'
import React,  { useState } from 'react';
import Profile from '../Profile/Profile';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function App() {

  const path = useLocation().pathname;
  const headerPaths = ['/', '/movies', '/saved-movies', '/profile'];
  const footerPaths = ['/', '/movies', '/saved-movies'];

  const [loggedIn, setLoggedIn] = useState(true);
  
  return (
    <div className='root'>
      {headerPaths.includes(path) && (
        <Header 
          loggedIn={loggedIn}
        />
      )}
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
            <Movies />
          }
        />
        <Route
          path='/saved-movies'
          element= {
            <SavedMovies />
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
            <Profile />
          }
        />
        <Route 
          path='/*'
          element={
            <NotFound />
          }
        />
      </Routes>
      {footerPaths.includes(path) && (
        <Footer />
      )}
    </div>
  )
}
