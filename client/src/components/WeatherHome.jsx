import React, { Component } from 'react';
import LightningBolt from '.././assets/lightning.svg';
import CurrentWeather from './CurrentWeather.jsx'




const Home = () => {

   return (
      <div>
         <div className='headerWeather'>
            <h2>Weather Forcast</h2>
            <img src={LightningBolt}/>
         </div>

         <div className="instructions">
            <p>Enter a US zipcode below to get the current weather conditions for that area.</p>
         </div>
         <div className='zipcodeInput'>
	  <form method='GET' action='http://localhost:3000/api/search-location-weather'>
	     <input type='text' placeholder='Enter zipcode..' name='zipcode'/>
	     <button>ENTER</button>
	  </form>
         </div>
      </div>
   )
}

export default Home;