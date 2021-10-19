import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import Header from './child-components/Header/header';
import './anime.css';
function App() {
  
  return (
    
    <div className="App">
      <div class="bike-riding">
        
        <div class="shadow"></div>
      <div class="cyclist">
        <div class="bike">
          <div class="leftTyre">
            <div class="spokes"></div>
          </div>
          <div class="rightTyre">
            <div class="spokes"></div>
          </div>
          <div class="wheel"></div>
          <div class="pedals"></div>
          <div class="chain"></div>
        </div>
        </div>
    </div>
    
      <Header/>
      <HomePage/>
      </div>
   
  );
}
  


export default App;