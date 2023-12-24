import './Table.scss';

export default function Table() {

    return (
        <div class="table__words">
            <div class="table__hedings">
                <div class="table__headings__section">Слово</div>
                <div class="table__headings__section">Перевод</div>
                <div class="table__headings__section">Транскрипция</div>
                <div class="table__headings__section">Редактирование</div>
            </div>
            <div class="table__section">
                <div class="table__section__string">mom</div>
                <div class="table__section__string">мама</div>
                <div class="table__section__string">[mɒm]</div>
                <div class="table__section__string">
                    <button class="word__edit">Редактировать</button>
                </div>
            </div>
        </div>
    )
}