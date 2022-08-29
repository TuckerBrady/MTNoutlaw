import React from 'react';

import { Blog, Footer, Header, Podcast, Shop } from './container';
import { Navbar } from './components';
import './App.scss';
const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <Blog />
      <Podcast />
      <Shop />
      <Footer />
    </div>
  );
}

export default App;