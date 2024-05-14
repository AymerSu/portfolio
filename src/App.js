import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Headers } from './components/Headers';
import { Footer } from './components/Footer';
import { Project } from './pages/Project';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';

function App() {
  return (
    <Router>
      <React.Fragment>
        <Headers />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/portfolio" element={<Home />} />
          <Route path="/proyectos" element={<Project />} />
          <Route path="/contacto" element={<Contact />} />
          {/* Define otras rutas aquí */}
        </Routes>
        <Footer />
      </React.Fragment>
    </Router>
  );
}

export default App;
