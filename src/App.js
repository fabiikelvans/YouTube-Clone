import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Search from './Search';

function App() {
  return (
    <div className="app">

      <Router>
        <Routes>
        <Route path="/search/:searchTerm" element={ <Search/> } />

        <Route path="/" element={<Home />} />
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
