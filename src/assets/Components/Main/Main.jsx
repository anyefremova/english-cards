import './Main.scss';
import logoDark from '../../images/logoDark.png';
import { NavLink } from 'react-router-dom';

export default function Main() {

    return (
        <div className='main'>
            <h2 className='main__title'>Elevate Your English, Master Every Word!</h2>
            <img src={logoDark} alt="Word Wings logo" className='main__logo' />
            <NavLink to="/cardlist"><button className='main__button'>Начать изучение</button></NavLink>
        </div>
    )
}