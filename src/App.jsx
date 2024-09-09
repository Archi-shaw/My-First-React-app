import React from 'react';
import Navbar from './components/Navbar.jsx';
import Landing from './components/Landing.jsx';
import Marquee from './components/Marquee.jsx';
import About from './components/About.jsx';
import Eyes from './components/Eyes.jsx';
import Featured from './components/Featured.jsx';
import Cards from './components/Cards.jsx';
import LocomotiveScroll from 'locomotive-scroll';
function App() {
  const locomotiveScroll =  new LocomotiveScroll();
  return (
    <div className='w-full min-h-screen bg-zinc-950 text-white'>
      <Navbar />
      <Landing />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Cards />
    </div>
  )
}

export default App;
