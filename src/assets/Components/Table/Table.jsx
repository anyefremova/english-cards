import './Table.scss';

export default function Table() {

    return (
        <div className='table__words'>
            <h2 className='table__title'>Список слов</h2>
            <div className='table__hedings'>
                <div className='table__headings__section'>Слово</div>
                <div className='table__headings__section'>Перевод</div>
                <div className='table__headings__section'>Транскрипция</div>
                <div className='table__headings__section'>Тема</div>
                <div className='table__headings__section'>Редактирование</div>
            </div>
            <div className='table__section'>
                <div className='table__section__string'>mom</div>
                <div className='table__section__string'>мама</div>
                <div className='table__section__string'>[mɒm]</div>
                <div className='table__section__string'>семья</div>
                <div className='table__section__string'>
                    <div className='table__button__edit'>
                        <button className='word__edit'><p className='button__edit__text'>Редактировать</p></button>
                    </div>
                </div>
            </div>
        </div>
    )
}