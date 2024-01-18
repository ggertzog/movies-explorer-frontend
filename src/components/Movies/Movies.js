import { useMoviesContext } from '../../contexts/MoviesContext';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';
import React from 'react';


export default function Movies({ 
    movies, 
    getMovies,
    saveMovie, 
    checkSavedMovies,
    deleteMovie
  }) {

  const {searchQuery, setSearchQuery, shortMovie, setShortMovie, searched, setSearched} = useMoviesContext();

  const handleSearch = (query) => {
    if(!searched) {
      getMovies();
      setSearched(true);
    }
    setSearchQuery(query);
    localStorage.setItem('searchQuery', query);
  }

  const toggleMovies = (filtered) => {
    setShortMovie(filtered)
  }

  return (
    <main className='movies'>
      <SearchForm 
        searchQuery={searchQuery}
        shortMovie={shortMovie}
        handleSearch={handleSearch}
        toggleMovies={toggleMovies}
      />
      <MoviesCardList
        checkSavedMovies={checkSavedMovies}
        saveMovie={saveMovie}
        deleteMovie={deleteMovie}
        searched={searched}
        movies={movies}
        searchQuery={searchQuery}
        shortMovie={shortMovie}
      />
    </main>
  )
}
