<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import ProjectsPage from './pages/Projects';
import Header from './components/Header';
import About from './pages/about';
import Dashboard from './pages/dashboard';
=======
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/about';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Dashboard from './pages/dashboard';
import Projects from './pages/Projects';
>>>>>>> ba336c48db448b5b4de521136a22b92e47a3f9fe

export default function App() {
  return (
    <Router>
<<<<<<< HEAD
      <Header/>
=======
>>>>>>> ba336c48db448b5b4de521136a22b92e47a3f9fe
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
<<<<<<< HEAD
        <Route path="/projects" element={<ProjectsPage />} />
=======
        <Route path="/projects" element={<Projects />} />

>>>>>>> ba336c48db448b5b4de521136a22b92e47a3f9fe
      </Routes>
    </Router>
  );
}

