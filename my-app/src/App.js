// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import PhotosPage from './PhotosPage';
import Home from './Home';
import AboutPage from './AboutPage';
import MosaicsPage from './MosaicsPage'

function App() {
  

  return (
    <Router>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photos" element={<PhotosPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/mosaics" element={<MosaicsPage />} />
          {/* Add more routes for other pages */}
        </Routes>
     
    </Router>
  );
}

export default App;

