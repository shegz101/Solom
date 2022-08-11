import './App.css';
import Landing from './Components/Landing';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './Components/Signup';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="signup" element={<Signup/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
