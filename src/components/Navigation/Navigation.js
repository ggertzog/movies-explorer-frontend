import './Navigation.css';
import React from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../../images/profile.svg';



export default function Navigation({loggedIn, page, changeColor}) {
  return (
    <>
        { loggedIn ? (
            <div className='header__navigation'>
                <div className='header__films'>
                    <Link className={`header__films_link${page.pathname === '/movies' ? '_type_active' : ''} header__films_theme_${changeColor}`} to='/movies'>Фильмы</Link>
                    <Link className={`header__films_link${page.pathname === '/saved-movies' ? '_type_active' : ''} header__films_theme_${changeColor}`} to='/saved-movies'>Сохранённые фильмы</Link>
                </div>
                <div className='header__profile'>
                    <Link className={`header__profile_link header__profile_theme_${changeColor}`} to='/profile'>Аккаунт</Link>
                    <Link className={`header__profile_icon header__profile_icon_theme_${changeColor}`} to='/profile'>
                        <img className='header__profile_image' src={profileIcon} alt='Иконка профиля' />
                    </Link>
                </div>
            </div>
        ) : (
            <div className='header__auth'>
                <Link className='header__auth_link header__auth_type_register' to='/signup'>Регистрация</Link>
                <div className='header__login'>
                <Link className='header__auth_link header__auth_type_login' to='/signin'>Войти</Link>
                </div>
            </div>
        )
        }
    </>
  )
}
