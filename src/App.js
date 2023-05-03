import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Game from './components/Game';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Home from './components/Home';

import {createMemoryHistory} from 'history';


function App() {
  const history = createMemoryHistory();
  
  return (
    <div className="App">
      <Router location={history.location} navigator={history}>
        <Routes>
          <Route path="/" element={<Home />}/>  
          <Route path="/game" element={<Game />}/>
          <Route path="/login" element={<LoginForm />}/>
          <Route path="/signup" element={<RegisterForm />}/>
          <Route path="/home" element={<Home />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;