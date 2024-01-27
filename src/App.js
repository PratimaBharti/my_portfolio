import React from 'react';
import './App.css'; 
import Header from './components/header/Header';
import Home from './components/home/Home';
import ScrollDown from './components/home/ScrollDown';
import ScrollUp from './components/scrollup/ScrollUp';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Qualification from './components/qualification/Qualification';
import Testimonials from './components/testimonials/Testimonials';
import Portfolio from './components/projects/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Qualification />
        <Skills />
        <Testimonials/>
        <Portfolio />
        <Contact />
        
        
       </main>
       <Footer />
       <ScrollUp/>
      </>
  );
}

export default App;
