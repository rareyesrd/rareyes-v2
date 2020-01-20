import React, {useState} from 'react';
// import  { TweenMax, Power3 } from 'gsap';
import './style.css';
import { useSpring, animated } from 'react-spring';
// import rafael from './images/rafaelreyes.svg'

const TextHeader = ({ text }) =>{
  const [isToggle, setToggle] = useState(false);
  const fade = useSpring({ 
    opacity: isToggle ? 1 : 0,
    fontSize: isToggle ? '5rem': '1rem',
    transform: isToggle ? 'translateX(50px)' : 'translateX(0px)'
  });
  return (
    <div className="TextHeader d-flex">
        <animated.p style={fade}>Hello</animated.p>
        <button class="btn" onClick={() => setToggle(!isToggle)}>Notification</button>
    </div>
  );
}

export default TextHeader;