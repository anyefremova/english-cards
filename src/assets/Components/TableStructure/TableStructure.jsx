import './TableStructure.scss';
import editButton from '../../images/editButton.png';
import deleteButton from '../../images/deleteButton.png'
import { useState, useEffect } from 'react';

export default function TableStructure({ id, word: initialWord, translate: initialTranslate, transcription: initialTranscription, category: initialCategory }) {
    const [isEditing, setIsEditing] = useState(false);
    const [word, setWord] = useState(initialWord);
    const [translate, setTranslate] = useState(initialTranslate);
    const [transcription, setTranscription] = useState(initialTranscription);
    const [category, setCategory] = useState(initialCategory);
    const [isEmpty, setIsEmpty] = useState(false);

    const handleEditClick = () => {
        setIsEditing(!isEditing);
    };

    const handleSaveClick = () => {
        setIsEditing(false);
    };

    const handleCancelClick = () => {
        setIsEditing(false);
    };

    useEffect(() => {
        const emptyFields = word.trim() === '' || translate.trim() === '' || transcription.trim() === '' || category.trim() === '';
        setIsEmpty(emptyFields);
    }, [word, translate, transcription, category]);

    return (
        <div className={`table__hedings__content ${isEmpty ? 'empty__field' : ''}`}>
            <div className='table__headings__word'>
                {isEditing ? (
                    <input type="text" value={word} onChange={(e) => setWord(e.target.value)} />
                ) : (
                    word
                )}
            </div>
            <div className='table__headings__translate'>
                {isEditing ? (
                    <input type="text" value={translate} onChange={(e) => setTranslate(e.target.value)} />
                ) : (
                    translate
                )}
            </div>
            <div className='table__headings__transcription'>
                {isEditing ? (
                    <input type="text" value={transcription} onChange={(e) => setTranscription(e.target.value)} />
                ) : (
                    transcription
                )}
            </div>
            <div className='table__headings__category'>
                {isEditing ? (
                    <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
                ) : (
                    category
                )}
            </div>
            <div className='table__headings__edit'>
                {isEditing ? (
                    <>
                        <div className='editing__buttons'>
                            <button onClick={handleSaveClick} className={`button__editing button__save ${isEmpty ? 'disabled' : ''}`} disabled={isEmpty}>Сохранить</button>
                            <button onClick={handleCancelClick} className='button__editing button__cancel'>Отменить</button>
                        </div>
                    </>
                ) : (
                    <>
                        <div className='editing__images'>
                            <img src={editButton} alt='Кнопка редактирования' className='editing__image image__edit' onClick={handleEditClick} />
                            <img src={deleteButton} alt='Кнопка удаления' className='editing__image image__delete' />
                        </div>
                    </>
                )}
            </div>
        </div >
    );
}