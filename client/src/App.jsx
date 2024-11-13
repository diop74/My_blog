import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/about';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Dashboard from './pages/dashboard';
import Projects from './pages/Projects';
import Header from './components/Header';
import Footer from './components/footer';
import PrivateRoute from './components/PrivateRoute';

export default function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<PrivateRoute/>}>
        <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

