import './AboutProject.css';
import React from 'react'

export default function AboutProject() {
  return (
    <div className='about-project' id='about-project'>
        <h2 className='about-project__title'>О проекте</h2>
        <div className='about-project__container'>
            <div className='about-project__box'>
                <p className='about-project__subtitle'>Дипломный проект включал 5 этапов</p>
                <p className='about-project__text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
            </div>
            <div className='about-project__box'>
                <p className='about-project__subtitle'>На выполнение диплома ушло 5 недель</p>
                <p className='about-project__text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
            </div>
        </div>
        <div className='about-project__streak-container'>
            <div className='about-project__box_type_frontend about-project__box_type_green'><p className='about-project__box_text'>1 неделя</p></div>
            <div className='about-project__box_type_backend about-project__box_type_gray'><p className='about-project__box_text'>4 неделя</p></div>
        </div>
        <div className='about-project__streak-container'>
            <div className='about-project__box_type_frontend'><p className='about-project__box_span'>Back-end</p></div>
            <div className='about-project__box_type_backend'><p className='about-project__box_span'>Front-end</p></div>
        </div>
    </div>
  )
}
