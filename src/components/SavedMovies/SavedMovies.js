import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';
import React from 'react';

export default function SavedMovies({loggedIn}) {

  return (
    <section className='saved-movies'>
      <Header 
        loggedIn={loggedIn}
      />
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </section>
  )
}
