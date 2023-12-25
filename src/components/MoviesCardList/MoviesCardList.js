import './MoviesCardList.css';
import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import cards from '../../utils/cards';


export default function MoviesCardList() {
  return (
    <>
      <div className='card-list'>
          {cards.map((card) => {
              return (
              <MoviesCard
                  card={card}
                  key={card.id}
              />
          )
          })}
      </div>

      {/* Можно вынести кнопку в отдельный компонент, чтобы не отображался в сохраненных фильмах */}
      <div className='card-list__container'>
            <button className='card-list__button'>Ещё</button>
      </div>
    </>
  )
}
