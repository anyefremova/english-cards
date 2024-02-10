import './Card.scss';

export default function Card(props) {
    return (
        <div className='card__container'>
            <div className='card__structure'>
                <div className='card__main'>
                    <div className='card__word'>{props.word}</div>
                    <div className='card__transcription'>{props.transcription}</div>
                </div>
                <div className='card__button'>
                    <button className='check__translate'>Проверить</button>
                </div>
            </div>
        </div>
    )
}