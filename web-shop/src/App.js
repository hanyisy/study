import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Headp from './Alls/Headp';
import Footp from './Alls/Footp';
import Mainpage from './Mainp/mainpage.js';
import subBest from './Bestp/subBest.js';
import subNew from './Newp/subNew.js';
import subEvent from './Eventp/subEvent.jsx';
import subAll from './Allp/subAll.jsx';
import '../style/main.scss'
import '../style/subBookList.scss'
import '../style/subEvent.scss'

function App() {
  return (
    <Router basename="/">
      <div className="App">
        <Headp />
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/subAll" element={<subAll />} />
          <Route path="/subBest" element={<subBest />} />
          <Route path="/subNew" element={<subNew />} />
          <Route path="/subEvent" element={<subEvent />} />
        </Routes>
        <Footp />
      </div>
    </Router>
  );
}

export default App;
