import './Card.scss';
import { useState, useEffect, useRef } from 'react';

export default function Card({ word, transcription, translate, onWordLearned }) {
    const [showTranslate, setShowTranslate] = useState(false);
    const translateButtonRef = useRef(null);

    useEffect(() => {
        if (!showTranslate && translateButtonRef.current) {
            translateButtonRef.current.focus();
        }
    }, [showTranslate]);

    const toggleTranslate = () => {
        setShowTranslate(!showTranslate);
        if (!showTranslate) {
            onWordLearned();
        }
    };

    return (
        <div className='card__container'>
            <div className='card__structure'>
                <div className='card__main'>
                    <div className='card__word'>{word}</div>
                    <div className='card__transcription'>{transcription}</div>
                </div>
                {showTranslate ? (
                    <div className='card__translate'>{translate}</div>
                ) : (
                    <div className='card__button'>
                        <button className='check__translate' onClick={toggleTranslate} ref={translateButtonRef}>Показать перевод</button>
                    </div>
                )}
            </div>
        </div>
    );
}