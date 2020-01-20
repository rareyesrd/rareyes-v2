import React from 'react';
import logo from './logo-rareyes.png';
import Header from './Components/Header/Header';
import TextHeader from './Components/TextHeader/TextHeader';
import './App.css';
// import { facebook, faInstagram } from '@fortawesome/free-solid-svg-icons';
import facebook from './facebook.svg';
import instagram from './instagram.svg';
// import  { TweenMax, Power3 } from 'gsap';
function App() {
  const redes = [
    {
      icon: facebook,
      link: 'https://www.facebook.com/Rafreye',
      target: '_blank',
      rel: 'noopener noreferrer”',
      id: 'facebook'
    },
    {
      icon: instagram,
      link: 'https://www.instagram.com/rarepz/',
      target: '_blank',
      rel: 'noopener noreferrer”',
      id: 'instagram'
    }
  ];

  const red = redes.map((red) =>{
    return (
      <li key={ red.id }><a href={ red.link } target={ red.target } rel={ red.rel } ><img src={red.icon} alt={red.id} /></a></li>
    )
  });
    return(
      <div className="App">
        {/* ======= LOGO ====== */}
        <div className="logo-area">
            <img src={logo} alt='logo-rareyes' className="logo" />
        </div>

        {/* ======= CONTENT ====== */}
        <div className="container">
          <div className="">
            <Header />
            <Header />
          </div>
          <TextHeader />
        </div>


        {/* ======= REDES ====== */}
        <div className='redes'>
          <ul className="redes-sociales">
            {red}
          </ul>
        </div>
        {/* ======= REDES ====== */}

        <div className="footer-space"></div>
      </div>
    )
}

export default App;
