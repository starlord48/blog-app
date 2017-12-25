import React, { Component } from 'react';
import Contact from './app/main/Contact';
import About from './app/main/About';
import ShowPost from './app/main/Postit';
import Sidebar from './app/main/Sidebar';
import Home from './app/main/Home';
import Signup from './app/main/Signup';
import Homepage from './app/main/Homepage';
import './App.css';
import {BrowserRouter as Router,
        Route}
        from 'react-router-dom';
class App extends Component {
  render() {
    return (

      <Router>
      <div className="main">

          <Route path="/" component={Sidebar} className="first" />
          <Route path="/index" component={Homepage} className="first1" />
          <Route path="/Home" component={Home} className="home" />
          <Route path="/about" component={About} className="sec" />
          <Route path="/contact" component={Contact} className="third" />
          <Route path="/Signup" component={Signup} className="fourth" />

      </div>
        </Router>

    );
  }
}

export default App;
