import React from 'react';

import { FeaturedArticles, Footer, Header, Podcast, Shop } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <FeaturedArticles />
      <Podcast />
      {/* <Shop /> */}
      <Footer />
    </div>
  );
}

export default App;