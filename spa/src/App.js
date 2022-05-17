import './App.css';
import './assets/HomeBanner.png';
import Footer from './components/footer';
import Header from './components/header';
import AllWhatsOn from './components/AllWhatsOn';
import WhatsOn from './components/WhatsOn';
import data from './data/films.json'
import React, { useState } from 'react';

function App() {

  const [filmData, setFilmData] = useState(data);
  return (
    <>
      <Header />

      <AllWhatsOn data={{ filmData }} />
      <Footer />
    </>
  )
}

export default App;