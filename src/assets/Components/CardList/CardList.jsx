import './CardList.scss';
import Card from '../Card/Card.jsx';
import wordsData from '../../data/words.json'

export default function CardList() {

    return (
        <div className='cards__block'>
            <h2 className='card__title'>Карточки</h2>
            <div className='card__container'>
                {wordsData.map((word) => {
                    return (
                        <Card
                            key={word.id}
                            word={word.english}
                            transcription={word.transcription}
                        />)
                })}
            </div>
        </div>
    )
}