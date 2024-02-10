import './CardList.scss';
import Card from '../Card/Card.jsx';
import wordsData from '../../data/words.json'

export default function CardList() {

    return (
        <div className='cards__block'>
            {wordsData.map((word) => {
                return (
                    <Card
                        key={word.id}
                        word={word.english}
                        transcription={word.transcription}
                    />)
            })}
        </div>
    )
}

/*
<div className='card__word'>{props.word}</div>
                    <div className='card__transcription'>{props.transcription}</div>
                    
                    <div className='cards__block'>
            <h2 className='card__title'>Карточки</h2>
            <div className='card__container'>*/