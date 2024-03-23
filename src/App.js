import './styles/App.css'
import Navbar from './components/navbar';
import StarrySky from './components/starrynight';
import About from './components/about';
import React from 'react';

function App() {

  return (
    
    <div>
      <div class = 'secondBackground'>
        <StarrySky/>
        
        <div class = 'navBehavior'> 
          <Navbar/>
        </div>

        <div className = 'aboutBehavior'> 
          <About/>
          <About/>
        </div>

      </div>
    </div>

  );
}

export default App;
