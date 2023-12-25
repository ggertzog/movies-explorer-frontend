import './FilterCheckbox.css';
import React, { useState } from 'react';

export default function FilterCheckbox() {

    const [button, setButton] = useState(false);

    const toggleButton = () => {
        setButton(prevState => !prevState);
    }

  return (
    <div className='filter-checkbox'>
        <button className={`filter-checkbox__button ${button ? 'filter-checkbox__button_active' : 'filter-checkbox__button_disabled'}`} type='button' onClick={toggleButton}>
            {/* <img className='filter-checkbox__button-image' src={buttonOff} alt='Тумблер' /> */}
        </button>
        <p className='filter-checkbox__text'>Короткометражки</p>
    </div>
  )
}
