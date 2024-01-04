import { Link } from 'react-router-dom';
import './Register.css';
import React from 'react';
import logo from '../../images/logo.svg'

export default function Register() {
  return (
    <section className='register'>
        <div className='register__container'>
            <Link className='register__icon-link' to='/'>
                <img className='register__icon' src={logo} alt='Иконка' />
            </Link>
            <h1 className='register__title'>Добро пожаловать!</h1>
            <form className='register__form'>
                <div className='register__box'>
                    <label className='register__label'>Имя</label>
                    <input type='text' className='register__input' placeholder='Имя' required />
                    <span className='register__span-error'>Что-то пошло не так...</span>
                </div>
                <div className='register__box'>
                    <label className='register__label'>E-mail</label>
                    <input type='email' className='register__input' placeholder='E-mail' required />
                    <span className='register__span-error'>Что-то пошло не так...</span>
                </div>
                <div className='register__box'>
                    <label className='register__label'>Пароль</label>
                    <input type='password' className='register__input' placeholder='Пароль' required />
                    <span className='register__span-error'>Что-то пошло не так...</span>
                </div>
                <div className='register__button-container'>
                    <button className='register__button'>Зарегистрироваться</button>
                    <p className='register__text'>Уже зарегистрированы?<Link className='register__link' to='/signin'> Войти</Link></p>
                </div>
            </form>
        </div>
    </section>
  )
}
