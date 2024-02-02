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
                        <button onClick={handleSaveClick}>Save</button>
                        <button onClick={handleCancelClick}>Cancel</button>
                    </>
                ) : (
                    <>
                        <img
                            src="/src/assets/images/editButton.png"
                            alt="Edit button"
                            className='button__image'
                            onClick={handleEditClick}
                        />
                        <img src="/src/assets/images/deleteButton.png" alt="Delete button" className='button__image' />
                    </>
                )}
            </div>
        </div>
    );
}
