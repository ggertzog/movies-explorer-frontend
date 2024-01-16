import './BurgerMenu.css';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import profileIcon from '../../images/profile.svg';

export default function BurgerMenu({isLoggedIn}) {

  const path = useLocation();

  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  function toggleBurgerMenuVision() {
      setIsBurgerMenuOpen(prevState => !prevState);
  }

  return (
    <>
      <div className={`burger-menu ${isBurgerMenuOpen ? 'burger-menu_opened' : ''}`}></div>
      <input type='checkbox' id='burger-menu__checkbox' className='burger-menu__checkbox' onClick={toggleBurgerMenuVision} />
      <label htmlFor='burger-menu__checkbox' className='burger-menu__label'></label>
      {isLoggedIn ? (
        <div className='burger-menu__list'>
          <Link className={`burger-menu__item ${path.pathname === '/' ? 'burger-menu__item_type_active' : ''}`} to='/'>Главная</Link>
          <Link className={`burger-menu__item ${path.pathname === '/movies' ? 'burger-menu__item_type_active' : ''}`} to='/movies'>Фильмы</Link>
          <Link className={`burger-menu__item ${path.pathname === '/saved-movies' ? 'burger-menu__item_type_active' : ''}`} to='/saved-movies'>Сохранённые фильмы</Link>
          <div className='burger-menu__container'>
            <Link className='burger-menu__profile' to='/profile'>Аккаунт</Link>
            <button className='burger-menu__profile_button'>
              <img className='burger-menu__profile_image' src={profileIcon} alt='иконка'/>
            </button>
          </div> 
        </div>
      ) : (
        <div className='burger-menu__list'>
          <Link className={`burger-menu__item ${path.pathname === '/' ? 'burger-menu__item_type_active' : ''}`} to='/'>Главная</Link>
          <Link className={`burger-menu__item ${path.pathname === '/signup' ? 'burger-menu__item_type_active' : ''}`} to='/signup'>Регистрация</Link>
          <Link className={`burger-menu__item ${path.pathname === '/signin' ? 'burger-menu__item_type_active' : ''}`} to='/signin'>Авторизация</Link>
        </div>
      )}
      
    </>
  )
}
