import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages'
import Pokemem from './pages/pokemem'
import GravyTrain from './pages/gravytrain'
import SignUp from './pages/signup'
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
          <Route path="/gravytrain" element={<GravyTrain/>} />
          <Route path="/cryptotracker" element={<CryptoTracker/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/signin" element={<SignIn/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
