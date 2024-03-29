import './Portfolio.css';
import React from 'react';

export default function Portfolio() {
  return (
    <div className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <div className='portfolio__container'>
        <a className='portfolio__link' href='https://github.com/ggertzog/how-to-learn' target="_blank" rel="noreferrer">Статичный сайт<span className='portfolio__span'>↗</span></a>
        <a className='portfolio__link' href='https://github.com/ggertzog/russian-travel' target="_blank" rel="noreferrer">Адаптивный сайт<span className='portfolio__span'>↗</span></a>
        <a className='portfolio__link' href='https://github.com/ggertzog/react-mesto-api-full-gha' target="_blank" rel="noreferrer">Одностраничное приложение<span className='portfolio__span'>↗</span></a>
      </div>
    </div>
  )
}
