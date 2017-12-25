import React, { Component } from 'react';
import {Button,FormControl} from 'react-bootstrap';

import {Link} from 'react-router-dom';
import './css/Main.css';
import  './css/Style.css';
import axios from 'axios';
//import {  ValidatedInput } from 'react-bootstrap-validation';

import Sidebar from './Sidebar';
class Contact extends Component {
  constructor(props){
    super(props);


    this.state ={
      email :'',
      password : ''
    };
  }
  emailChange(e)
  {
    this.setState({email :e.target.value});
  }
  passChange(e)
  {
    this.setState({password :e.target.value});
  }
  result(){
    axios.post('/result', {
      email : this.state.email,
      password : this.state.password
    })
    .then(function(response){
      if(response.data==='success'){
        window.location.assign('http://localhost:3000/index');
      }

    })
  .catch(function(error){
    console.log(error);
  })

}
  render() {

    return (
      <div>
      <Sidebar />
      <div className="back">

          <form className="user-reg">
              <div className="header"><h3 >User Registration</h3></div>
              <div className="form-body">
              <label>Email Id</label>
              <FormControl type="email" placeholder="Enter your email Id" onChange= {this.emailChange.bind(this)} /><br/>
              <label>Password</label>
              <FormControl type="password" placeholder="Enter your password" onChange= {this.passChange.bind(this)}/>
              <Button bsStyle="success"
              block className="btn"
                       onClick = {this.result.bind(this)}>Submit</Button>
              </div>
              <Link to="/Signup" className="new-user">New user</Link>
          </form>
          </div>
      </div>
    );
  }

}

export default Contact;
