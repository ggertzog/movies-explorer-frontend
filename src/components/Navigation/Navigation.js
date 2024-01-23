import './Navigation.css';
import React from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../../images/profile.svg';



export default function Navigation({isLoggedIn, page, changeColor}) {
  return (
    <nav className='navigation'>
        { isLoggedIn ? (
            <div className='navigation__container'>
                <div className='navigation__films'>
                    <Link className={`navigation__films_link ${page.pathname === '/movies' ? 'navigation__films_link_type_active' : ''} navigation__films_theme_${changeColor}`} to='/movies'>Фильмы</Link>
                    <Link className={`navigation__films_link ${page.pathname === '/saved-movies' ? 'navigation__films_link_type_active' : ''} navigation__films_theme_${changeColor}`} to='/saved-movies'>Сохранённые фильмы</Link>
                </div>
                <div className='navigation__profile'>
                    <Link className={`navigation__profile_link navigation__profile_theme_${changeColor}`} to='/profile'>Аккаунт</Link>
                    <Link className={`navigation__profile_icon navigation__profile_icon_theme_${changeColor}`} to='/profile'>
                        <img className='navigation__profile_image' src={profileIcon} alt='Иконка профиля' />
                    </Link>
                </div>
            </div>
        ) : (
            <div className='navigation__auth'>
                <Link className='navigation__auth_link navigation__auth_type_register' to='/signup'>Регистрация</Link>
                <Link className='navigation__login' to='/signin'>
                    <p className='navigation__auth_link navigation__auth_type_login'>Войти</p>
                </Link>
            </div>
        )
        }
    </nav>
  )
}
