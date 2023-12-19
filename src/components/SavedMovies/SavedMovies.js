import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';
import React from 'react';

export default function SavedMovies() {

  return (
    <div>
        <SearchForm />
        <MoviesCardList />
    </div>
  )
}
