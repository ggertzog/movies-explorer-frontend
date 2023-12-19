import './NotFound.css';
import React from 'react';

export default function NotFound() {
  return (
    <div className='not-found'>
        <div className='not-found__container'>
            <h2 className='not-found__title'>404</h2>
            <p className='not-found__text'>Страница не найдена</p>
            <button className='not-found__button'>Назад</button>
        </div>
    </div>
  )
}
