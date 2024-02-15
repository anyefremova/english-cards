import './Main.scss';
import logoDark from '../../images/logoDark.png';

export default function Main() {

    return (
        <div className='main'>
            <h2 className='main__title'>Elevate Your English, Master Every Word!</h2>
            <img src={logoDark} alt="Word Wings logo" className='main__logo' />
            <p>Здесь будет кнопка "Начать изучение"</p>
        </div>
    )
}