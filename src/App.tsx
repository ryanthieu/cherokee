import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {Navbar} from './components/navbar';
import {Home} from './pages/home/home';
import {Quiz} from './pages/quiz/quiz'
import {Slideshow} from './pages/slideshow/slideshow';
import AdditionalResources from './pages/resources/additionalresources'
import LearnMore from './pages/learnmore/learnmore'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/information" element={<Quiz />} />
          <Route path="/slideshow" element={<Slideshow />} />    
          <Route path="/additionalresources" element={<AdditionalResources />} /> 
          <Route path="/learnmore" element={<LearnMore />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
