import './MoviesCard.css';
import React, { useState } from 'react';

export default function MoviesCard({card}) {

    const [button, setButton] = useState(false);

    const toggleButton = () => {
        setButton(prevState => !prevState);
    }

    return (
        <div className='card'>
            <div className='card__container'>
                <div className='card__box'>
                    <h2 className='card__title'>{card.title}</h2>
                    <p className='card__time'>{card.time}</p>
                </div>
                <button type='button' className={`card__button card__button_type_${button ? 'active' : 'disabled'}`} alt='Кнопка' onClick={toggleButton}></button>
            </div>
            <img className='card__image' src={card.link} alt='Изображение' />
        </div>
    )
}
