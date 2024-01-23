import './Profile.css';
import React, {useContext, useState} from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useMoviesContext } from '../../contexts/MoviesContext';
import { useForm } from '../../hooks/useForm';

export default function Profile({ logOut, onUpdateUser, profileMessage }) {

  const currentUserInfo = useContext(CurrentUserContext);
  const { resetMoviesContext } = useMoviesContext();

  const [editProfile, setEditProfile] = useState(false);
  const [isRequesting, setIsRequesting] = useState(false);

  const handleLogOut = () => {
    logOut();
    resetMoviesContext();
  }

  function handleEditProfile() {
    setEditProfile(!editProfile);
  }

  const { values, handleChange, errors, isValid } = useForm({
    email: currentUserInfo.email,
    name: currentUserInfo.name,
  });

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setIsRequesting(true);
    onUpdateUser(values)
      .then(() => {
        handleEditProfile();
      })
      .finally(() => {
        setIsRequesting(false);
      })
  }

  const requirementValidity = !isValid || (currentUserInfo.name === values.name && currentUserInfo.email === values.email);

  const toggleStateButton = requirementValidity || isRequesting || Object.keys(errors).length > 0;

  return (
    <section className='profile'>
      <div className='profile__container'>
        <form className='profile__form' onSubmit={handleSubmit} noValidate>
          <h2 className='profile__title'>Привет, {currentUserInfo.name}!</h2>
          <div className='profile__box'>
            <p className='profile__text'>Имя</p>
            <input 
              type='text'
              name='name' 
              className='profile__input' 
              value={values.name} 
              placeholder='Введите имя'
              onChange={handleChange} 
              disabled={!editProfile}
              required 
              minLength='2'
              maxLength='30'
              pattern={'^[а-яА-Яa-zA-Z0-9]+$'}
            />
          </div>
          <div className='profile__box'>
            <p className='profile__text'>E-mail</p>
            <input 
              type='email'
              name='email' 
              className='profile__input' 
              value={values.email} 
              placeholder='Введите email'
              onChange={handleChange} 
              disabled={!editProfile}
            />
          </div>
          { editProfile ? (
            <>
              <span className='profile__span-error'>{errors.name || errors.email}</span>
              <button 
                className={`profile__button_type_submit ${toggleStateButton ? 'profile__button_type_disabled' : ''}`} 
                type='submit' 
                disabled={toggleStateButton}
              >
                Сохранить
              </button>
            </>
          ) : (
            <>
              <span className='profile__span-error'>{profileMessage}</span>
              <button className='profile__button profile__button_type_edit' onClick={handleEditProfile}>Редактировать</button>
              <button className='profile__button profile__button_type_exit' onClick={handleLogOut}>Выйти из аккаунта</button>
            </>
          )
          }
        </form>
      </div>
    </section>
  )
}
