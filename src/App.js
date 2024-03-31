import './styles/App.css'
import Navbar from './components/navbar';
import StarrySky from './components/starrynight';
import About from './components/about';
import React from 'react';
import Skills from './components/skills';
import Projects from './components/projects';

function App() {

  return (
    
    <div class = 'secondBackground'>
        <StarrySky/>
        
        <div class = 'navBehavior'> 
          <Navbar/>
        </div>

        <div className = 'aboutBehavior'> 
          <About/>
        </div>
          
        <div clasName = 'skillsBehavior'>
          <Skills/>
        </div>

        <div className = 'projectBehavior'>
          <Projects/>
        </div>


    </div>

  );
}

export default App;
