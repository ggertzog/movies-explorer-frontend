import './Footer.css';
import React from 'react';

export default function Footer() {
  return (
    <div className='footer'>
        <p className='footer__title'>Учебный проект Яндекс.Практикум x BeatFilm.</p>
        <div className='footer__container'>
            <p className='footer__text footer__year'>&copy; 2023</p>
            <div className='footer__box'>
                <p className='footer__text'>Яндекс.Практикум</p>
                <p className='footer__text'>Github</p>
            </div>
        </div>
    </div>
  )
}
