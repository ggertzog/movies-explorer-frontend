import './MoviesCardList.css';
import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import cards from '../../utils/cards';


export default function MoviesCardList() {
  return (
    <div className='card-list'>
      <div className='card-list__content'>
          {cards.map((card) => {
              return (
              <MoviesCard
                  card={card}
                  key={card.id}
              />
          )
          })}
      </div>
      <div className='card-list__container'>
            <button className='card-list__button'>Ещё</button>
      </div>
    </div>
  )
}
