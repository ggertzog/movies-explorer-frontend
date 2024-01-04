import './Footer.css';
import React from 'react';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <p className='footer__title'>Учебный проект Яндекс.Практикум x BeatFilm.</p>
        <div className='footer__content'>
            <p className='footer__text footer__year'>&copy; 2023</p>
            <div className='footer__box'>
                <a className='footer__text' href='https://practicum.yandex.ru/' target='_blank' rel="noreferrer">Яндекс.Практикум</a>
                <a className='footer__text' href='https://github.com/' target='_blank' rel="noreferrer">Github</a>
            </div>
        </div>
      </div>
    </footer>
  )
}
