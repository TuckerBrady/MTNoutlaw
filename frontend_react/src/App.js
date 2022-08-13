import React from 'react';

import { About, Blog, Contact, Footer, Header, Podcast, Shop } from './container';
import { Navbar } from './components';
import './App.scss';
const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Blog />
      <Podcast />
      <Contact />
      <Shop />
      <Footer />
    </div>
  );
}

export default App;