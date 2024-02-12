import { useState } from 'react';
import './CardList.scss';
import Card from '../Card/Card.jsx';
import wordsData from '../../data/words.json';
import arrowLeft from '../../images/arrowLeft.png';
import arrowRight from '../../images/arrowRight.png';

export default function CardList({ initialCardIndex = 0 }) {
    const [currentCardIndex, setCurrentCardIndex] = useState(initialCardIndex);

    const goToPreviousCard = () => {
        if (currentCardIndex > 0) {
            setCurrentCardIndex(currentCardIndex - 1);
        }
    };

    const goToNextCard = () => {
        if (currentCardIndex < wordsData.length - 1) {
            setCurrentCardIndex(currentCardIndex + 1);
        }
    };

    return (
        <div className='cards__block'>
            <h2 className='card__title'>Карточки</h2>
            <div className='card__element'>
                <div className='left__button'>
                    <img src={arrowLeft} alt="Стрелка влево" onClick={goToPreviousCard} className="arrow__button" />
                </div>
                <div className='card__container'>
                    {currentCardIndex < wordsData.length && (
                        <Card
                            key={wordsData[currentCardIndex].id}
                            word={wordsData[currentCardIndex].english}
                            transcription={wordsData[currentCardIndex].transcription}
                            translate={wordsData[currentCardIndex].russian}
                        />
                    )}
                </div>
                <div className='right__button'>
                    <img src={arrowRight} alt="Стрелка вправо" onClick={goToNextCard} className="arrow__button" />
                </div>
            </div>
        </div>

    );
}
/*export default function CardList() {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);

    const goToPreviousCard = () => {
        if (currentCardIndex > 0) {
            setCurrentCardIndex(currentCardIndex - 1);
        }
    };

    const goToNextCard = () => {
        if (currentCardIndex < wordsData.length - 1) {
            setCurrentCardIndex(currentCardIndex + 1);
        }
    };

    return (
        <div className='cards__block'>
            <h2 className='card__title'>Карточки</h2>
            <div className='card__container'>
                {wordsData.map((word, index) => {
                    return (
                        <Card
                            key={word.id}
                            word={word.english}
                            transcription={word.transcription}
                            translate={word.russian}
                            isVisible={index === currentCardIndex}
                        />)
                })}
                <div className="slider__buttons">
                    <button onClick={goToPreviousCard} disabled={currentCardIndex === 0}>Previous</button>
                    <button onClick={goToNextCard} disabled={currentCardIndex === wordsData.length - 1}>Next</button>
                </div>
            </div>
        </div>
    )
}*/