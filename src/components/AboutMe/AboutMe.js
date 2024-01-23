import './AboutMe.css';
import React from 'react';
import photo from '../../images/photo.jpg';
import '../Portfolio/Portfolio';
import Portfolio from '../Portfolio/Portfolio';

export default function AboutMe() {
  return (
    <section className='about-me'>
      <div className='about-me__container'>
        <h2 className='about-me__title'>Студент</h2>
        <div className='about-me__content'>
          <div className='about-me__box'>
              <p className='about-me__name'>Роман</p>
              <p className='about-me__profession'>Фронтенд-разработчик, 23 года</p>
              <p className='about-me__text'>Я родился в городе Королёв, живу в городе Симферополь, закончил факультет механики "Симферопольского техникума железнодорожного транспорта и промышленности" с отличием.
                  Увлекаюсь спортом и развитием навыков в сфере веб-разработки. С 2020 по начало 2023 работал монтажником фасадов. С целью изменить свою профессию пришел на курсы Яндекс.Практикума, в настоящее время активно
                  ищу работу в сфере веб-разработки.
              </p>
              <a className='about-me__link' href='https://github.com/ggertzog' target="_blank" rel="noreferrer">Github</a>
          </div>
          <img className='about-me__image' src={photo} alt='Фотография' />
        </div>
        <Portfolio />
      </div>
    </section>
  )
}
