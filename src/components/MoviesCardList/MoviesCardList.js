import './MoviesCardList.css';

import React, { useState } from 'react';

import MoviesCard from '../MoviesCard/MoviesCard';
import useResize from '../../hooks/useResize';

import { 
  WINDOW_WIDTH,
  NUMBER_OF_CARDS,
  MOVIE_TO_ADD,
  SHORT_MOVIE_DURATION
} from '../../utils/constants';

export default function MoviesCardList({ movies, saveMovie, deleteMovie, checkSavedMovies, searched, searchQuery, shortMovie }) {

  const screenWidth = useResize();
  const visibleMovies = screenWidth >= WINDOW_WIDTH.large 
    ? NUMBER_OF_CARDS.large 
    : screenWidth >= WINDOW_WIDTH.medium 
        ? NUMBER_OF_CARDS.medium 
        : NUMBER_OF_CARDS.small;

  const [films, setFilms] = useState(visibleMovies);

  const findMovies = searched ? movies
    .filter(movie => {
      const query = searchQuery.toLowerCase() || '';
      return ((movie.nameRU || '').toLowerCase().includes(query) || 
              (movie.nameEN || '').toLowerCase().includes(query)) && 
            (!shortMovie || movie.duration <= SHORT_MOVIE_DURATION.time);
    }).slice(0, films) 
  : [];

  const handleAddRow = () => {
    const additionalMovies = screenWidth >= WINDOW_WIDTH.large 
      ? MOVIE_TO_ADD.large 
      : MOVIE_TO_ADD.medium;
    setFilms(films + additionalMovies);
  };

  const isNotAllMovies = films === findMovies.length;

  return (
    <div className='card-list'>
      <div className='card-list__content'>
        {searched && findMovies.length === 0 ? (
          <p className='card-list__not-found'>Ничего не найдено</p>
        ) : (
          <div className='card-list__box'>
            {findMovies.map((movie) => (
              <MoviesCard 
                movie={movie} 
                key={movie.movieId || movie._id} 
                saveMovie={saveMovie}
                deleteMovie={deleteMovie}
                checkSavedMovies={checkSavedMovies}
              />
            ))}
          </div>
        )}
      </div>
      {isNotAllMovies &&
        (
          <div className='card-list__container'>
                <button className='card-list__button' onClick={handleAddRow}>Ещё</button>
          </div>
        )
      }
    </div>
  )
}
