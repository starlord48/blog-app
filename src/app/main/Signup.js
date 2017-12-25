import React, { Component } from 'react';
import {Button,FormControl} from 'react-bootstrap';

import './css/Main.css';
import axios from 'axios';
class Signup extends Component {
  constructor(props){
    super(props);


    this.state ={
      name:'',
      email :'',
      password : ''
    };
  }
  nameChange(e)
  {
    this.setState({name :e.target.value});
  }
  emailChange(e)
  {
    this.setState({email :e.target.value});
  }
  passChange(e)
  {
    this.setState({password :e.target.value});
  }
  results(){
    axios.post('/results', {
      name:this.state.name,
      email : this.state.email,
      password : this.state.password
    })
    .then(function(response){
      if(response === "success")
      console.log(response);
      else{
        alert("enter again");
      }

    })
  .catch(function(error){
    console.log(error);

  })

  }
  render() {

    return (
      <div className="back">

          <form className="user-reg">
              <div className="header"><h3 >User Registration</h3></div>
              <div className="form-body">
              <label>Name</label>
              <FormControl type="text" placeholder="Enter your Name" onChange= {this.nameChange.bind(this)} />
              <label>Email Id</label>
              <FormControl type="text" placeholder="Enter your email Id" onChange= {this.emailChange.bind(this)} />
              <label>Password</label>
              <FormControl type="password" placeholder="Enter your Password" onChange= {this.passChange.bind(this)}/>
              <Button bsStyle="success"
              block className="btn"
                       onClick = {this.results.bind(this)}>Submit</Button>
              </div>

          </form>

      </div>
    );
  }
}

export default Signup;
