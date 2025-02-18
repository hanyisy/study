import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Headp from './Alls/Headp';
import Footp from './Alls/Footp';
import Mainpage from './Mainp/mainpage';
import subBest from './Bestp/subBest';
import subNew from './Newp/subNew';
import subEvent from '../Eventp/subEvent';
import '../style/main.scss'

function App() {
  return (
    <Router basename="/">
      <div className="App">
        <Headp />
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/Top" element={<subBest />} />
          <Route path="/Bot" element={<subNew />} />
          <Route path="/Sho" element={<subEvent />} />
        </Routes>
        <Footp />
      </div>
    </Router>
  );
}

export default App;
