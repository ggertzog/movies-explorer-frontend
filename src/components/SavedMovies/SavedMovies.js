import { useMoviesContext } from '../../contexts/MoviesContext';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';
import React, { useState } from 'react';

export default function SavedMovies({movies, deleteMovie, checkSavedMovies}) {

  const {searched, setSearched} = useMoviesContext();

  const [searchQuerySave, setSearchQuerySave] = useState('');
  const [shortMovieSave, setShortMovieSave] = useState(false);

  const handleSearchChange = (query) => {
    setSearchQuerySave(query);
    setSearched(true);
  };

  const handleShortFilmChange = (checked) => {
    setShortMovieSave(checked);
    localStorage.setItem('shortFilmSave', checked);
  };

  return (
    <main className='saved-movies'>
      <SearchForm 
        handleSearch={handleSearchChange}
        toggleMovies={handleShortFilmChange}
        shortMovie={shortMovieSave}
      />
      <MoviesCardList 
        searched={searched}
        movies={movies}
        deleteMovie={deleteMovie}
        checkSavedMovies={checkSavedMovies}
        shortMovie={shortMovieSave}
        searchQuery={searchQuerySave}
      />
    </main>
  )
}
