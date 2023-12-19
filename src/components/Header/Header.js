import './Header.css';
import React from 'react';
import headerLogo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
        <header className='header'>
            <div className='header__container'>
                <Link className='header__link' to='/'>
                    <img className='header__logo' src={headerLogo} alt='лого' />
                </Link>
                <div className='header__auth'>
                    <Link className='header__auth_link header__auth_type_register' to='/signup'>Регистрация</Link>
                    <div className='header__login'>
                        <Link className='header__auth_link header__auth_type_login' to='/signin'>Войти</Link>
                    </div>
                </div>
            </div>
        </header>
    </>
  )
}
