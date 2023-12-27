import { Link } from 'react-router-dom';
import './Login.css';
import React from 'react';
import logo from '../../images/logo.svg'

export default function Login() {
  return (
    <page className='login'>
        <div className='login__container'>
            <Link className='login__icon-link' to='/'>
                <img className='login__icon' src={logo} alt='Иконка' />
            </Link>
            <h1 className='login__title'>Рады видеть!</h1>
            <form className='login__form'>
                <div className='login__box'>
                    <label className='login__label'>E-mail</label>
                    <input type='email' className='login__input' />
                    <span className='login__span-error'>Что-то пошло не так...</span>
                </div>
                <div className='login__box'>
                    <label className='login__label'>Пароль</label>
                    <input type='password' className='login__input' />
                    <span className='login__span-error'>Что-то пошло не так...</span>
                </div>
                <div className='login__button-container'>
                    <button className='login__button'>Войти</button>
                    <p className='login__text'>Ещё не зарегестрированы?<Link className='login__link' to="/signup"> Регистрация</Link></p>
                </div>
            </form>
        </div>
    </page>
  )
}
