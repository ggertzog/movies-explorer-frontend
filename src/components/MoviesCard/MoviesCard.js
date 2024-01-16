import './MoviesCard.css';
import React from 'react';
import { useLocation } from 'react-router-dom';

export default function MoviesCard({ movie, saveMovie, deleteMovie, checkSavedMovies }) {

    const {hours, minutes} = toHoursAndMinutes();
    const isSaved = checkSavedMovies(movie);

    const page = useLocation();

    const handleSaveMovie = () => {
        !isSaved && saveMovie(movie);
    }

    const handleDeleteMovie = () => {
        deleteMovie(movie);
    }

    // Функция для расчета минут в часы и минуты
    function toHoursAndMinutes() {
        const hours = Math.floor(movie.duration / 60);
        const minutes = movie.duration % 60;
        return {hours, minutes}
    }

    return (
        <div className='card'>
            <div className='card__container'>
                <div className='card__box'>
                    <h2 className='card__title'>{movie.nameRU}</h2>
                    <p className='card__time'>{`${hours}ч ${minutes}м`}</p>
                </div>
                { page.pathname === '/movies' ? (
                    <button 
                        type='button' 
                        className={`card__button card__button_type_${isSaved ? 'active' : 'disabled'}`} 
                        onClick={!isSaved ? handleSaveMovie : handleDeleteMovie}
                    >
                    </button>
                ) : (
                    <button type='button' className='card__button card__button_type_delete' onClick={handleDeleteMovie}></button>
                )
                }
            </div>
            <a href={movie.trailerLink} className='card__link' target='_blank' rel='noreferrer'>
                <img className='card__image' src={movie.image} alt='Изображение' />
            </a>   
        </div>
    )
}
