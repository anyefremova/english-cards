import './Header.scss';
import logoDark from '../../images/logoDark.png';
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react';

export default function Header() {

    return (
        <header className='header'>
            <div className='header__logo'>
                <NavLink to="/"><h3 className='header__title'>WordWings</h3></NavLink>
                <NavLink to="/"><img src={logoDark} alt="English Easy to Learn" className='header__logo_img' /></NavLink>
            </div>
            <div className='header__menu'>
                <ul className='menu__list'>
                    <li className='menu__item'><NavLink to="/">Главная страница</NavLink></li>
                    <li className='menu__item'><NavLink to="/tablewithwords">Список слов</NavLink></li>
                    <li className='menu__item'><NavLink to="/cardlist">Карточки</NavLink></li>
                </ul>
            </div>
        </ header>
    )
}