import { Link } from 'react-router-dom';
import './Register.css';
import React, { useState, useEffect } from 'react';
import logo from '../../images/logo.svg'
import { useForm } from '../../hooks/useForm';

export default function Register({ registration, isRegister }) {

    const [isRequesting, setIsRequesting] = useState(false);
    const { values, handleChange, resetForm, errors, isValid } = useForm();


    const handleSubmit = (e) => {
        e.preventDefault();
        setIsRequesting(true);  
        registration(values).finally(() => setIsRequesting(false));
    }

    const toggleStateButton = !isValid || isRequesting;

    useEffect(() => {
        resetForm();
      }, [resetForm])

    return (
        <section className='register'>
            <div className='register__container'>
                <Link className='register__icon-link' to='/'>
                    <img className='register__icon' src={logo} alt='Иконка' />
                </Link>
                <h1 className='register__title'>Добро пожаловать!</h1>
                <form className='register__form' onSubmit={handleSubmit} noValidate>
                    <div className='register__box'>
                        <label className='register__label'>Имя</label>
                        <input 
                            type='text' 
                            id='name' 
                            name='name' 
                            value={values.name || ''} 
                            onChange={handleChange} 
                            className={`register__input ${errors.name && 'register__error-input'}`} 
                            placeholder='Имя' 
                            required
                            minLength="2"
                            maxLength="30"
                            pattern={'^[а-яА-Яa-zA-Z0-9]+$'} 
                        />
                        <span className='register__span-error'>{errors.name}</span>
                    </div>
                    <div className='register__box'>
                        <label className='register__label'>E-mail</label>
                        <input 
                            type='email' 
                            id='email' 
                            name='email' 
                            value={values.email || ''} 
                            onChange={handleChange} 
                            className={`register__input ${errors.email && 'register__error-input'}`}
                            placeholder='E-mail' 
                            required 
                        />
                        <span className='register__span-error'>{errors.email}</span>
                    </div>
                    <div className='register__box'>
                        <label className='register__label'>Пароль</label>
                        <input 
                            type='password' 
                            id='password' 
                            name='password' 
                            value={values.password || ''} 
                            onChange={handleChange} 
                            className={`register__input ${errors.password && 'register__error-input'}`} 
                            placeholder='Пароль' 
                            required
                            minLength='8'
                            maxLength='30' 
                        />
                        <span className='register__span-error'>{errors.password}</span>
                    </div>
                    <div className='register__button-container'>
                        <span className='register__span-error'>{isRegister.message}</span>
                        <button 
                            className={`register__button ${toggleStateButton ? 'register__button_type_disabled' : ''}`}
                            disabled={toggleStateButton}
                        >Зарегистрироваться</button>
                        <p className='register__text'>Уже зарегистрированы?<Link className='register__link' to='/signin'> Войти</Link></p>
                    </div>
                </form>
            </div>
        </section>
    )
}
