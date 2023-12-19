import './AboutMe.css';
import React from 'react';
import photo from '../../images/photo.jpg';
import '../Portfolio/Portfolio';
import Portfolio from '../Portfolio/Portfolio';

export default function AboutMe() {
  return (
    <div className='about-me'>
        <h2 className='about-me__title'>Студент</h2>
        <div className='about-me__container'>
            <div className='about-me__box'>
                <p className='about-me__name'>Роман</p>
                <p className='about-me__profession'>Фронтенд-разработчик, 23 года</p>
                <p className='about-me__text'>Я родился в городе Королёв, живу в городе Симферополь, закончил факультет механики "Симферопольского техникума желехнодорожного транспорта и промышленности" с отличием.
                    Увлекаюсь спортом и развитием навыков в сфере веб-разработки. С 2020 по начало 2023 работал монтажником фасадов. С целью изменить свою профессию пришел на курсы Яндекс.Практикума, в настоящее время активно
                    ищу работу в сфере веб-разаработки.
                </p>
                <span className='about-me__span'>Github</span>
            </div>
            <img className='about-me__image' src={photo} alt='Фотография' />
        </div>
        <Portfolio />
    </div>
  )
}
