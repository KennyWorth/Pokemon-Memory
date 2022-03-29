import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages'
import Pokemem from './pages/pokemem'
import CryptoTracker from './pages/cryptotracker';

function App() {
  return (
    
    <div className="App">
      <Router>
        <Navbar />
          <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/pokemem" element={<Pokemem/>} />
          <Route path="/cryptotracker" element={<CryptoTracker/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
