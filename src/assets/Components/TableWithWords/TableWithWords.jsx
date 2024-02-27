import './TableWithWords.scss';

import TableStructure from '../TableStructure/TableStructure';
import wordsData from '../../data/words.json'

export default function TableWithWords() {

    return (
        <div className='table__words'>
            <h2 className='table__title'>Список слов</h2>
            <div className='table__main'>
                <div className='table__hedings'>
                    <div className='table__headings__section'>Слово</div>
                    <div className='table__headings__section'>Перевод</div>
                    <div className='table__headings__section'>Транскрипция</div>
                    <div className='table__headings__section'>Тема</div>
                    <div className='table__headings__section'>Редактирование</div>
                </div>
                {wordsData.map((word) => {
                    return (
                        <TableStructure
                            key={word.id}
                            id={word.id}
                            word={word.english}
                            translate={word.russian}
                            transcription={word.transcription}
                            category={word.tags}
                        />)
                })}
            </div>
        </div>
    )
}
