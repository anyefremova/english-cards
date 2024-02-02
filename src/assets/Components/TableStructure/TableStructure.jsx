import './TableStructure.scss';

import { useState } from 'react';

export default function TableStructure(props) {
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
            <div className='table__headings__word'>{props.word}</div>
            <div className='table__headings__translate'>{props.translate}</div>
            <div className='table__headings__transcription'>{props.transcription}</div>
            <div className='table__headings__category'>{props.category}</div>
            <div className='table__headings__edit'>
                {isEditing ? (
                    <>
                        <div className='editing__buttons'>
                            <button onClick={handleSaveClick} className='button__editing button__save'>Save</button>
                            <button onClick={handleCancelClick} className='button__editing button__cancel'>Cancel</button>
                        </div>
                    </>
                ) : (
                    <>
                        <div className='editing__images'>
                            <img
                                src='/src/assets/images/editButton.png'
                                alt='Edit button'
                                className='editing__image'
                                onClick={handleEditClick}
                            />
                            <img src='/src/assets/images/deleteButton.png' alt='Delete button' className='editing__image' />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
