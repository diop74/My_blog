import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import ProjectsPage from './pages/Projects';
import Header from './components/Header';
import About from './pages/about';
import Dashboard from './pages/dashboard';

export default function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </Router>
  );
}

