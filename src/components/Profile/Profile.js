import './Profile.css';
import React from 'react';

export default function Profile() {
  return (
    <div className='profile'>
        <form className='profile__form'>
            <h2 className='profile__title'>Привет, Роман!</h2>
            <div className='profile__box'>
                <p className='profile__text'>Имя</p>
                <input type='text' className='profile__input' placeholder='Имя' />
            </div>
            <div className='profile__box'>
                <p className='profile__text'>E-mail</p>
                <input type='email' className='profile__input' placeholder='E-mail'/>
            </div>
            <button className='profile__button profile__button_type_submit'>Редактировать</button>
            <button className='profile__button profile__button_type_exit'>Выйти из аккаунта</button>
        </form>
    </div>
  )
}
