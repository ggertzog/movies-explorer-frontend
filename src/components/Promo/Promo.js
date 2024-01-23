import './Promo.css';
import React from 'react';
import planetImage from '../../images/planet.svg';

export default function MainPage() {
  return (
    <section className='promo'>
      <div className='promo__container'>
        <div className='promo__about'>
            <h1 className='promo__title'>Учебный проект студента факультета Веб&#8209;разработки.</h1>
            <p className='promo__subtitle'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
            <a className='promo__link' href='#about-project'>
              <p className='promo__link-text'>Узнать больше</p>
            </a>
        </div>
        <img className='promo__image' src={planetImage} alt='Планета'/>
      </div>
    </section>
  )
}
