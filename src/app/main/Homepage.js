import React, { Component } from 'react';
import  './css/Front-style.css';

import Postit from './Postit';

class Homepage extends Component {
  render() {
    return (
      <div>
      <div className="enter">
      
      <Postit />
        </div>
      </div>
    );
  }
}


export default Homepage;
