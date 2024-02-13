import './Header.scss';
import logoDark from '../../images/logoDark.png';
import logoLight from '../../images/logoLight.png';

export default function Header() {

    return (
        <div className='header'>
            <h3 className='header__logo'>WordWings</h3>
            <img src={logoDark} alt="English Easy to Learn" className='header__logo_img' />
            <div className='header__menu'>
                <p className='header__title'>Список слов</p>
                <p className='header__title'>Карточки</p>
            </div>
        </div>
    )
}