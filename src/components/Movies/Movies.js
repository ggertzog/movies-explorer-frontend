import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';
import React from 'react';


export default function Movies() {

  return (
    <section className='movies'>
        <SearchForm />
        <MoviesCardList />
    </section>
  )
}
