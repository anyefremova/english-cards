import './App.css';
import Header from './Header/Header.jsx';
import Main from './Main/Main.jsx';
import Footer from './Footer/Footer.jsx';
import TableWithWords from './TableWithWords/TableWithWords.jsx';

function App() {

    return (
        <div className='app'>
            <Header />
            <Main />
            <TableWithWords />
            <Footer />
        </div >
    )
}

export default App
