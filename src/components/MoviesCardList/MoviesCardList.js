import './MoviesCardList.css';

import React, { useState } from 'react';

import MoviesCard from '../MoviesCard/MoviesCard';
import useResize from '../../hooks/useResize';

export default function MoviesCardList({ movies, saveMovie, deleteMovie, checkSavedMovies, searched, searchQuery, shortMovie }) {

  const screenWidth = useResize();
  const visibleMovies = screenWidth >= 1280 ? 12 : screenWidth >= 768 ? 8 : 5;

  const [films, setFilms] = useState(visibleMovies);

  const findMovies = searched ? movies
    .filter(movie => {
      const query = searchQuery.toLowerCase() || '';
      return ((movie.nameRU || '').toLowerCase().includes(query) || 
              (movie.nameEN || '').toLowerCase().includes(query)) && 
            (!shortMovie || movie.duration <= 40);
    }).slice(0, films) 
  : [];

  const handleAddRow = () => {
    const additionalMovies = screenWidth >= 1280 ? 3 : 2;
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
