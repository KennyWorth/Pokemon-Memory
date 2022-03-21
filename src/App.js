import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages'
import Pokemem from './pages/pokemem'
import About from './pages/about'
import Contact from './pages/contact'
import SignIn from './pages/signin'
import CryptoTracker from './pages/cryptotracker';

function App() {
  return (
    
    <div className="App">
      <Router>
        <Navbar />
          <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/pokemem" element={<Pokemem/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/cryptotracker" element={<CryptoTracker/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/signin" element={<SignIn/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
