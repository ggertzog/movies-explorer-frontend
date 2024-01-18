import './FilterCheckbox.css';
import React from 'react';

export default function FilterCheckbox({ isFiltered, onCheckboxChange }) {

  return (
    <div className='filter-checkbox'>
      <button 
        className={`filter-checkbox__button ${isFiltered ? 'filter-checkbox__button_active' : 'filter-checkbox__button_disabled'}`} 
        type='button' 
        onClick={onCheckboxChange}
      >
      </button>
      <p className='filter-checkbox__text'>Короткометражки</p>
    </div>
  )
}
