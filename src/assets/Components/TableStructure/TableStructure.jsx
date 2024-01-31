import './TableStructure.scss';

export default function TableStructure(props) {

    return (
        <div className='table__hedings__content'>
            <div className='table__headings__word'>{props.word}</div>
            <div className='table__headings__translate'>{props.translate}</div>
            <div className='table__headings__transcription'>{props.transcription}</div>
            <div className='table__headings__category'>{props.category}</div>
            <div className='table__headings__edit'>
                <img src="/src/assets/images/editButton.png" alt="Edit button" className='button__image' />
                <img src="/src/assets/images/deleteButton.png" alt="Delete button" className='button__image' />
            </div>
        </div>
    )
}
