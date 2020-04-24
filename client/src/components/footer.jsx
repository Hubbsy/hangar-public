import React from 'react';
import image from '../aopa-squarelogo-1532698071562.png'
import logo from '../gold-airplane-travel-globe-fly-logo-vector-14921499.jpg'


const Footer = (props) => {
  return (
  <div className="footer">
    <div >
      <img className="aopa" src={image}/>
      <img className="gold" src={logo}/>
      <span className="trademark"> ©2020 Aircraft Owners and Pilots Association 421 Aviation Way Frederick, MD, 21701</span>
    </div>
    <div>

    </div>
  </div>
  );
}






export default Footer;