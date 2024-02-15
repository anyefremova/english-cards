import './Header.scss';
import logoDark from '../../images/logoDark.png';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={isScrolled ? 'header header__scrolled' : 'header'}>
            <div className='header__logo'>
                <NavLink to="/"><h3 className='header__title'>WordWings</h3></NavLink>
                <NavLink to="/"><img src={logoDark} alt="Word wings logo" className='header__logo_img' /></NavLink>
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