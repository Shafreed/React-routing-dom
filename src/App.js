import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './page/Home';
import Contact from './page/Contact';
import About from './page/About';


function App() {
  
return (
    <div >
      <Router>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      </Routes> 
      </Router>
      
      
      
       
    </div>
  );
}

export default App;
