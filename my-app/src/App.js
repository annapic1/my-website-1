// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import PhotosPage from './PhotosPage';
import Home from './Home';
import AboutPage from './AboutPage';

function App() {
  

  return (
    <Router>
      
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photos" element={<PhotosPage />} />
          <Route path="/about" element={<AboutPage />} />
          {/* Add more routes for other pages */}
        </Routes>
     
    </Router>
  );
}

export default App;

