import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';
import React from 'react';


export default function Movies({loggedIn}) {

  return (
    <div className='movies'>
        <Header 
          loggedIn={loggedIn}
        />
        <SearchForm />
        <MoviesCardList />
        <Footer />
    </div>
  )
}
