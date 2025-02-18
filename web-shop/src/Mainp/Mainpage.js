import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import mainSlide from './mainSlide.jsx'
import Wapi from './Wapi.jsx';
import bookReview from './bookReview.js';
import Newbook from './Newbook.jsx';
import bestBook from './bestBook.jsx';

function mainpage() {
    return (
        <Router basename="/">
        <div className="mainpage">
            <div>
            <Wapi />
            <mainSlide />
            </div>
            <bookReview />
            <Newbook />
            <bestBook /> 
        </div> 
        </Router>
    );
}

export default mainpage;