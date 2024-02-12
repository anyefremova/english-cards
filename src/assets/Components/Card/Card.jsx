import './Card.scss';
import { useState } from 'react';

export default function Card(props) {
    const [showTranslate, setShowTranslate] = useState(false);

    const toggleTranslate = () => {
        setShowTranslate(!showTranslate);
    };

    return (
        <div className='card__container'>
            <div className='card__structure'>
                <div className='card__main'>
                    <div className='card__word'>{props.word}</div>
                    <div className='card__transcription'>{props.transcription}</div>
                </div>
                {showTranslate ? (
                    <div className='card__translate'>{props.translate}</div>
                ) : (
                    <div className='card__button'>
                        <button className='check__translate' onClick={toggleTranslate}>Показать перевод</button>
                    </div>
                )}
            </div>
        </div>
    );
}