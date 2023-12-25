import Header from '../Header/Header';
import './Profile.css';
import React, {useState} from 'react';

export default function Profile({loggedIn}) {

  const [editProfile, setEditProfile] = useState(false);

  function handleEditProfile(evt) {
    evt.preventDefault();
    setEditProfile(!editProfile);
  }

  return (
    <>
      <Header 
        loggedIn={loggedIn}
      />
      <div className='profile'>
          <form className='profile__form'>
              <h2 className='profile__title'>Привет, Роман!</h2>
              <div className='profile__box'>
                  <p className='profile__text'>Имя</p>
                  <input type='text' className='profile__input' placeholder='Имя' disabled={!editProfile} />
              </div>
              <div className='profile__box'>
                  <p className='profile__text'>E-mail</p>
                  <input type='email' className='profile__input' placeholder='E-mail' disabled={!editProfile} />
              </div>
              { editProfile ? (
                <>
                  <span className='profile__span-error'>При обновлении профиля произошла ошибка.</span>
                  <button className='profile__button_type_submit'>Сохранить</button>
                </>
              ) : (
                <>
                  <button className='profile__button profile__button_type_edit' onClick={handleEditProfile}>Редактировать</button>
                  <button className='profile__button profile__button_type_exit'>Выйти из аккаунта</button>
                </>
              )
              }
          </form>
      </div>
    </>
  )
}
