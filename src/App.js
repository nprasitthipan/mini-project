import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Contact from './contents/Contact';

import { BrowserRouter as Router, Route } from 'react-router-dom'  //for click link next page

//Contents
import Home from './contents/Home'
import About from './contents/About'
import Experience from './contents/Experience'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
          <Route exact path="/"> <Home /> </Route>
          <Route path="/about"> <About /> </Route>
          <Route path="/experience"> <Experience/> </Route>
          <Route path="/contact"> <Contact /> </Route>
      </div>
    </Router>
  );
}

export default App;
