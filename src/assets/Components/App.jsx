import './App.scss';
import Header from './Header/Header.jsx';
import Main from './Main/Main.jsx';
import Footer from './Footer/Footer.jsx';
import TableWithWords from './TableWithWords/TableWithWords.jsx';
import CardList from './CardList/Cardlist.jsx';

function App() {

    return (
        <div className='app'>
            <Header />
            <Main />
            <TableWithWords />
            <CardList />
            <Footer />
        </div >
    )
}

export default App
