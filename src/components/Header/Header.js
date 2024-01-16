import './Header.css';
import React, { useState, useEffect } from 'react';
import headerLogo from '../../images/logo.svg';
import { Link, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

export default function Header({isLoggedIn}) {

    const page = useLocation();

    const changeColor = page.pathname === '/' ? 'blue' : 'white';

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
        setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);

        return () => {
        window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <header className={`header header_theme_${changeColor}`}>
            <div className='header__container'>
                <Link className='header__link' to='/'>
                    <img className='header__logo' src={headerLogo} alt='лого' />
                </Link>
                { windowWidth >= 769 ? (
                    <Navigation 
                        isLoggedIn={isLoggedIn}
                        page={page}
                        changeColor={changeColor}
                    />
                ) : (
                    <BurgerMenu 
                        isLoggedIn={isLoggedIn}
                    />
                )
                }
            </div>
        </header>
    )
}
