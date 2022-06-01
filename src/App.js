import React from 'react'
import Navbar from './components/Nabvar.js'
import Hero from './components/Hero.js'
import About from './components/About.js'
import Testimonials from './components/Testimonials.js'
import Demo from './components/Demo.js'
import Footer from './components/Footer.js'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Testimonials />
      <Demo />
      <Footer />
    </div>
  );
}

export default App;
