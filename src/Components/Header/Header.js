import React from 'react';
// import  { TweenMax, Power3 } from 'gsap';
import './Header.css';

const Header = () =>{
 let firstH = null;
 let secondH = null;
 firstH = (
    <h1 >RAFAEL</h1>
 )
 secondH = (
  <h1 className="text-flex"><span>FRONT-END</span> REYES <span>DEVELOPER</span></h1>
 )
 const textFirstH = {...firstH};
  const splitFirstH = firstH.props.children.split('');
    for(var i = 0; i < splitFirstH.lenght; i++){
      textFirstH += <span> splitFirstH[i] </span>
    }
  return (
    <div className="Header">
        <div className="title-header">
            {firstH}
            {secondH}
        </div>
    </div>
  );
}

export default Header;