import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './components/common/NavBar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Footer from "./components/common/Footer.jsx";
import styles from './App.module.css';

function App() {
    return (
        <Router>
            <div className={styles.app}>
                <NavBar/>
                <main>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/projects" element={<Projects/>}/>
                        <Route path="/about" element={<AboutMe/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                    </Routes>
                </main>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
