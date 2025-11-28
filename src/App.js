import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contact';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Tempo da animação (ex: 2.5s)
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return loading ? (
    <LoadingScreen />
  ) : (
    <div className="page">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
