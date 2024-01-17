import './App.css'

import React,  { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { MoviesProvider } from '../../contexts/MoviesContext';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import SavedMovies from '../SavedMovies/SavedMovies';
import Preloader from '../Preloader/Preloader';

import getAllMovies from '../../utils/MoviesApi';
import api from '../../utils/MainApi';
import * as auth from '../../utils/auth';
import { correctMoviesFormat } from '../../utils/utils';
import ProtectedRouteElement from '../../utils/ProtectedRoute';

export default function App() {

  // переменные для отрисовки шапки и подвала
  const path = useLocation().pathname;
  const headerPaths = ['/', '/movies', '/saved-movies', '/profile'];
  const footerPaths = ['/', '/movies', '/saved-movies'];

  // переменные авторизации
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState('');
  const [isRegister, setIsRegister] = useState({
    status: '',
    message: ''
  });
  const [loginFailed, setLoginFailed] = useState('');
  const [currentUser, setCurrentUser] = useState({});

  // переменные филтрации и поиска
  const [movies, setMovies] = useState(getLocalMovies());
  const [savedMovies, setSavedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    setToken(jwt);
  }, [token, setToken]);

  useEffect(() => {
    if(!token) {
      setIsLoading(false);
      return;
    }
    auth.getContent(token)
      .then((data) => {
        setIsLoggedIn(true);
        setCurrentUser(data);
      })
      .catch(console.error);
  }, [token, setIsLoading, setIsLoggedIn, setCurrentUser]);

  useEffect(() => {
    if(isLoggedIn) {
      Promise.all([auth.getContent(token), api.getSavedMovies()])
        .then(([user, savedMovies]) => {
          setCurrentUser(user);
          setSavedMovies(savedMovies.reverse());
        })
        .catch(console.error)
        .finally(() => {
          setIsLoading(false)
        })
    }
  }, [isLoggedIn, token, setCurrentUser, setSavedMovies, setIsLoading])

  const getMovies = () => {
    getAllMovies()
      .then((items) => {
        const formatedMovies = correctMoviesFormat(items);
        setMovies(formatedMovies);
        localStorage.setItem('movies', JSON.stringify(formatedMovies));
        setIsLoading(true)
      })
      .catch(console.error)
      .finally(() => {
        setIsLoading(false)
      })
  }

  const saveMovie = (movie) => {
    api.createMovie(movie)
      .then((movie) => {
        setSavedMovies([...savedMovies, movie]);
      })
      .catch(console.error);
  }

  const deleteMovie = (movie) => {
    const movieId = movie._id || savedMovies.find((i) => i.movieId === movie.movieId)._id;
    api.deleteMovie(movieId)
      .then(() => {
        setSavedMovies((previousMovies) => {
          return previousMovies.filter((savedMovie) => savedMovie._id !== movieId);
        });
      })
      .catch(console.error);
  };

  function getLocalMovies () {
    return JSON.parse(localStorage.getItem('movies') ?? '[]');
  }

  function checkSavedMovies (movie) {
    return savedMovies.some((i) => i._id === movie._id || i.movieId === movie.movieId);
  }

  // Функция регистрации
  const registration = async (data) => {
    try {
      await auth.register(data)
      .then(() => {
        setIsLoading(true)
        setIsRegister({
          status: true,
          message: 'Вы успешно зарегестрировались!'
        });
        login({email: data.email, password: data.password})
      })} catch (err) {
        setIsRegister({
          status: false,
          message: 'Что-то пошло не так! Попробуйте ещё раз.'
        });
        console.error(err);
      } finally {
        setIsLoading(false)
      }
  }

  // функция авторизации
  const login = async (email, password) => {
    try {
      await auth.authorize(email, password)
      .then((res) => {
        setIsLoading(true)
        setToken(res.token);
        localStorage.setItem('jwt', res.token);
        setIsLoggedIn(true)
        navigate('/movies');
      })} catch (err) {  
        console.error(err);
        setLoginFailed('Что-то пошло не так! Попробуйте ещё раз.')
      } finally {
        setIsLoading(false)
      }
  }

  // функция выхода из учетной записи
  const logOut = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    setToken('');
    setMovies([]);
    setCurrentUser({});
    navigate('/');
  }

  // функция обновления профиля
  const handleUpdateProfile = (email, name) => {
    return api.editUserProfile(email, name)
      .then((res) => {
        setCurrentUser(res);
        setIsLoading(true)
      })
      .catch(console.error)
      .finally(() => {
        //Поставил таймер чтобы убедиться что работает
        setTimeout(() => {
          setIsLoading(false)
        }, 500)
      })
  }

  if(isLoading) {
    return <Preloader />
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <MoviesProvider>
        <div className='root'>
          {headerPaths.includes(path) && (
            <Header 
              isLoggedIn={isLoggedIn}
            />
          )}
          <Routes>
            <Route 
              path='/'
              element= {
                <Main />
              }
            />
            <Route element={<ProtectedRouteElement  isLoggedIn={isLoggedIn}/>}>
              <Route
                  path='/movies'
                  element= {
                    <Movies 
                      movies={movies}
                      getMovies={getMovies}
                      saveMovie={saveMovie}
                      deleteMovie={deleteMovie}
                      checkSavedMovies={checkSavedMovies}
                    />
                  }
                />
            </Route>
            <Route element={<ProtectedRouteElement  isLoggedIn={isLoggedIn}/>}>
              <Route
                path='/saved-movies'
                element= {
                  <SavedMovies 
                    movies={savedMovies}
                    deleteMovie={deleteMovie}
                    checkSavedMovies={checkSavedMovies}
                  />
                }
              />
            </Route>
            <Route element={<ProtectedRouteElement  isLoggedIn={!isLoggedIn}/>}>
              <Route
                path='/signin'
                element= {
                  <Login 
                    login={login}
                    isLoggedIn={isLoggedIn}
                    errorMessage={loginFailed}
                  />
                }
              />
            </Route>
            <Route 
              path='/signup'
              element={
                <Register 
                  registration={registration}
                  isRegister={isRegister}
                />
              }
            />
            <Route element={<ProtectedRouteElement  isLoggedIn={isLoggedIn}/>}>
              <Route 
                path='/profile'
                element={
                  <Profile 
                    logOut={logOut}
                    onUpdateUser={handleUpdateProfile}
                  />
                }
              />
            </Route>
            <Route 
              path='/*'
              element={
                <NotFound />
              }
            />
          </Routes>
          {footerPaths.includes(path) && (
            <Footer />
          )}
        </div>
      </MoviesProvider>
    </CurrentUserContext.Provider>
  )
}
