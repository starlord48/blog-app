import React, { Component } from 'react';


import {Nav,NavItem} from 'react-bootstrap';
import  './css/Style.css';
class Sidebar extends Component {
  render() {
    return (
      <div>
        <div className="menu">
          <div className="wrap">

          <Nav  bsStyle="pills"  stacked >

          <NavItem className="home"  block eventKey = {1} href ="/home">
          <div className= "fa fa-home">
          </div>
          Home
          </NavItem>

          <NavItem className="about" eventKey = {2} href = "/about">
          <div className= "fa fa-user">
          </div>
          About
          </NavItem>

          <NavItem className="contact" eventKey = {3} href ="/contact">
          <div className= "fa fa-sign-in">
          </div>
          Sign In
          </NavItem>
          <NavItem className="entry" eventKey = {4} href ="/index">
          <div className= "fa fa-paper-plane">
          </div>
          Entry
          </NavItem>

          </Nav>

           </div>

        </div>

      </div>
    );
  }
}

export default Sidebar;
