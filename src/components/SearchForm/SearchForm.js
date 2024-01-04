import './SearchForm.css';
import React from 'react';
import searchImage from '../../images/search.svg';
import findImage from '../../images/find.svg'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

export default function SearchForm() {
  return (
    <div className='search-form'>
        <form className='search-form__form'>
            <img className='search-form__image' src={searchImage} alt='Лупа' />
            <input className='search-form__input' placeholder='Фильм'/>
            <button className='search-form__button' type='submit'>
                <img className='search-form__button-image' src={findImage} alt='Поиск' />
            </button>
        </form>
        <FilterCheckbox />
    </div>
  )
}
