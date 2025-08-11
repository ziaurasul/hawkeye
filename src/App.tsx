import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Reviews from './components/Reviews';
import Gallery from './components/Gallery';
import Stats from './components/Stats';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Stats />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;