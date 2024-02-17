import { useState } from 'react';
import './CardList.scss';
import Card from '../Card/Card.jsx';
import wordsData from '../../data/words.json';
import arrowLeft from '../../images/arrowLeft.png';
import arrowRight from '../../images/arrowRight.png';

export default function CardList({ initialCardIndex = 0 }) {
    const [currentCardIndex, setCurrentCardIndex] = useState(initialCardIndex);
    const [wordsLearned, setWordsLearned] = useState(0);

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

    const handleWordLearned = () => {
        setWordsLearned(wordsLearned + 1);
    };

    return (
        <div className='cards__block'>
            <h2 className='card__title'>Карточки</h2>
            <div className='card__element'>
                <div className='left__button'>
                    {currentCardIndex > 0 && (
                        <img src={arrowLeft} alt="Стрелка влево" onClick={goToPreviousCard} className="arrow__button arrow__left" />
                    )}
                </div>
                <div className='card__container'>
                    {currentCardIndex < wordsData.length && (
                        <Card
                            key={wordsData[currentCardIndex].id}
                            word={wordsData[currentCardIndex].english}
                            transcription={wordsData[currentCardIndex].transcription}
                            translate={wordsData[currentCardIndex].russian}
                            onWordLearned={handleWordLearned}
                        />
                    )}
                </div>
                <div className='right__button'>
                    {currentCardIndex < wordsData.length - 1 && (
                        <img src={arrowRight} alt="Стрелка вправо" onClick={goToNextCard} className="arrow__button arrow__right" />
                    )}
                </div>
            </div>
            <div className='card__learned_words'>
                <p className='learned__words'>Количество изученных слов: {wordsLearned}</p>
            </div>
        </div>

    );
}