import './App.scss';
import Header from './Header/Header.jsx';
import Main from './Main/Main.jsx';
import Footer from './Footer/Footer.jsx';
import TableWithWords from './TableWithWords/TableWithWords.jsx';
import CardList from './CardList/CardList.jsx';
import wordsData from '../data/words.json';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

function App() {

    return (
        <>
            <Router>
                <div className='app'>
                    <Header />

                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/tablewithwords" element={<TableWithWords />} />
                        <Route path="/cardlist" element={<CardList wordsData={wordsData} />} />
                    </Routes>

                    <Footer />
                </div >
            </Router>
        </>
    )
}

export default App
