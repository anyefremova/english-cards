import './Main.scss';
import Table from '../Table/Table.jsx';

export default function Main() {

    return (
        <div className='main'>
            <h2 className='main__title'>Слова для изучения</h2>
            <Table></Table>
        </div>
    )
}