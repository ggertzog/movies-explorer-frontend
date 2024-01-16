import { Link } from 'react-router-dom';
import './Login.css';
import React, { useEffect, useState } from 'react';
import logo from '../../images/logo.svg';
import { useForm } from '../../hooks/useForm';

export default function Login({login, errorMessage}) {

    const [isRequesting, setIsRequesting] = useState(false);
    const { values, handleChange, resetForm, errors, isValid } = useForm({});

    const handleSubmit = (e) => {
        e.preventDefault();
        login(values).finally(() => setIsRequesting(false));
    }

    const toggleStateButton = !isValid || isRequesting;

    useEffect(() => {
        resetForm();
    }, [resetForm])

    return (
        <section className='login'>
            <div className='login__container'>
                <Link className='login__icon-link' to='/'>
                    <img className='login__icon' src={logo} alt='Иконка' />
                </Link>
                <h1 className='login__title'>Рады видеть!</h1>
                <form className='login__form' onSubmit={handleSubmit} noValidate>
                    <div className='login__box'>
                        <label className='login__label'>E-mail</label>
                        <input 
                            type='email' 
                            id='email' 
                            name='email' 
                            value={values.email || ''} 
                            onChange={handleChange} 
                            className='login__input' 
                            placeholder='E-mail' 
                            required 
                        />
                        <span className='login__span-error'>{errors.email || ''}</span>
                    </div>
                    <div className='login__box'>
                        <label className='login__label'>Пароль</label>
                        <input 
                            type='password' 
                            id='password' 
                            name='password' 
                            value={values.password || ''} 
                            onChange={handleChange} 
                            className='login__input' 
                            placeholder='Пароль' 
                            required
                            minLength='8'
                            maxLength='30' 
                        />
                        <span className='login__span-error'>{errors.password || ''}</span>
                    </div>
                    <div className='login__button-container'>
                        <span className='login__span-error'>{errorMessage}</span>
                        <button 
                            className={`login__button ${toggleStateButton ? 'login__button_type_disabled' : ''}`} 
                            disabled={toggleStateButton} 
                        >Войти</button>
                        <p className='login__text'>Ещё не зарегестрированы?<Link className='login__link' to="/signup"> Регистрация</Link></p>
                    </div>
                </form>
            </div>
        </section>
    )
}
