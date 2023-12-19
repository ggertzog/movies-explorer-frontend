import './Portfolio.css';
import React from 'react';
import { Link } from 'react-router-dom'

export default function Portfolio() {
  return (
    <div className='portfolio'>
        <h2 className='portfolio__title'>Портфолио</h2>
        <div className='portfolio__container'>
            <Link className='portfolio__link' href='#'>Статичный сайт<span className='portfolio__span'>↗</span></Link>
            <Link className='portfolio__link' href='#'>Адаптивный сайт<span className='portfolio__span'>↗</span></Link>
            <Link className='portfolio__link' href='#'>Одностраничное приложение<span className='portfolio__span'>↗</span></Link>
        </div>
    </div>
  )
}
