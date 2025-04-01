import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Resume from './components/Resume/Resume';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <Resume />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;