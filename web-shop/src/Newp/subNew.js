import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function subNew() {
    return (
        <div className="subNew">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Top" element={<Top />} />
                <Route path="/Bot" element={<Bot />} />
                <Route path="/Sho" element={<Sho />} />
                <Route path="/Ve" element={<Ve />} />
            </Routes>
        </div>
    );
}

export default subNew;