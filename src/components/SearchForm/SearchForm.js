import './SearchForm.css';
import React, { useState } from 'react';
import searchImage from '../../images/search.svg';
import findImage from '../../images/find.svg'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import useForm from '../../hooks/useForm';

export default function SearchForm({ 
  searchQuery = '',
  shortMovie,
  handleSearch,
  toggleMovies
 }) {

  const [state, setState] = useState(false);

  const { values, handleChange } = useForm({
    search: searchQuery,
  })

  const handleChangeState = () => {
    setState(prev => !prev);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(values.search);
  }

  const onToggleMovies = () => {
    handleChangeState();
    toggleMovies(state)
  }

  return (
    <div className='search-form'>
        <form className='search-form__form' name='search' onSubmit={handleSubmit} >
            <img className='search-form__image' src={searchImage} alt='Лупа' />
            <input className='search-form__input' name='search' value={values.search || ''} onChange={handleChange} required placeholder='Фильм' />
            <button className='search-form__button' type='submit'>
                <img className='search-form__button-image' src={findImage} alt='Поиск' />
            </button>
        </form>
        <FilterCheckbox
          isFiltered={shortMovie}
          onCheckboxChange={onToggleMovies}
        />
    </div>
  )
}
