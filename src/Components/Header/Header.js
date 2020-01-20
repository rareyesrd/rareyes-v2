import React from 'react';
// import  { TweenMax, Power3 } from 'gsap';
import { useSpring, animated } from 'react-spring';
import './Header.css';

const Header = () =>{
  const fade = useSpring({ from: { opacity: 0 }, opacity: 1 });
  console.log(fade)

  return (
    <div className="Header">
        <animated.div className="title-header" style={fade}>
        <h1 >RAFAEL</h1>
         <h1 className="text-flex"><span>FRONT-END</span> REYES <span>DEVELOPER</span></h1>
        </animated.div>
    </div>
  );
}

export default Header;