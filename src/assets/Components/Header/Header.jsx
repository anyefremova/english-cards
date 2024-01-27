import './Header.scss';

export default function Header() {

    return (
        <div className='header'>
            <h3 className='header__logo'>WordWings</h3>
            <div className='header__menu'>
                <p className='header__title'>Список слов</p>
                <p className='header__title'>Карточки</p>
            </div>
        </div>
    )
}