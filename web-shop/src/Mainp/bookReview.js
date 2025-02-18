import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function bookReview() {
    return (
        <Router basename="/">
        <div className="bookReview">
            <h1>bookreview Page</h1>
        </div>
        </Router>
    );
}

export default bookReview;