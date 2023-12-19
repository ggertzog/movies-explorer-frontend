import './App.css'
import React from 'react';
import Header from '../Header/Header';
// import Profile from '../Profile/Profile';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
// import Movies from '../Movies/Movies';
// import SavedMovies from '../SavedMovies/SavedMovies';
// import Login from '../Login/Login';
// import Register from '../Register/Register';
// import NotFound from '../NotFound/NotFound';

export default function App() {
  return (
    <div className='root'>
      <Header />
      <Main />
      {/* <Movies /> */}
      {/* <SavedMovies /> */}
      <Footer />
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <Profile /> */}
      {/* <NotFound /> */}
    </div>
  )
}
