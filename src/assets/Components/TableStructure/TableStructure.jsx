import './TableStructure.scss';
import editButton from '../../images/editButton.png';
import deleteButton from '../../images/deleteButton.png'
import { useState } from 'react';

export default function TableStructure({ word, translate, transcription, category }) {
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(!isEditing);
    };

    const handleSaveClick = () => {
        setIsEditing(false);
    };

    const handleCancelClick = () => {
        setIsEditing(false);
    };

    return (
        <div className='table__hedings__content'>
            <div className='table__headings__word'>{word}</div>
            <div className='table__headings__translate'>{translate}</div>
            <div className='table__headings__transcription'>{transcription}</div>
            <div className='table__headings__category'>{category}</div>
            <div className='table__headings__edit'>
                {isEditing ? (
                    <>
                        <div className='editing__buttons'>
                            <button onClick={handleSaveClick} className='button__editing button__save'>Сохранить</button>
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
        </div>
    );
}