import './NotFound.css';
import React from 'react';

export default function NotFound({goBack}) {


  return (
    <section className='not-found'>
      <div className='not-found__container'>
          <h1 className='not-found__title'>404</h1>
          <p className='not-found__text'>Страница не найдена</p>
          <button className='not-found__link' onClick={goBack}>Назад</button>
      </div>
    </section>
  )
}