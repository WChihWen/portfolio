import './App.scss';
import React from 'react';

import {Navbar} from './components';
import {About, Footer, Header, Skills, Testimonial, Work} from './container';


function App() {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />     
      <Footer />
    </div>
  );
}
{/* <Testimonial /> */}
export default App;
