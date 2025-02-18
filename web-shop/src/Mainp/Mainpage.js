import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import mainSlide from './mainSlide.jsx'
import Wapi from './Wapi.jsx';

function mainpage() {
    return (
        <Router basename="/">
        <div className="mainpage">
            <div>
            <Wapi />
            <mainSlide />
            </div>
        </div>
        </Router>
    );
}

export default mainpage;