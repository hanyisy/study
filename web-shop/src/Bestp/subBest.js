import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Headp from './Alls/Headp';
import Footp from './Alls/Footp';

function subBest() {
    return (
        <Router basename="/">
        <div className="subBest">
            <Headp />
            <Routes> 
                <Route path="/" element={<Home />} />
                <Route path="/Top" element={<Top />} />
                <Route path="/Bot" element={<Bot />} />
                <Route path="/Sho" element={<Sho />} />
                <Route path="/Ve" element={<Ve />} />
            </Routes>
            <Footp />
        </div>
        </Router>
    );
}

export default subBest;