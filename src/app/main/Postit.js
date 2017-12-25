import React, { Component } from 'react';
import  './css/Front-style.css';
import {Button} from 'react-bootstrap';

import axios from 'axios';


class  Postit extends Component {

  constructor(props){
    super(props);
  this.state ={
      subject :'',
      blogpost : ''
    };
  }
  textChange(e)
  {
    this.setState({subject :e.target.value});
  }
  tareaChange(e)
  {
    this.setState({blogpost :e.target.value});
  }
  blogresult(){
    axios.post('/blogresult', {
      subject : this.state.subject,
      blogpost : this.state.blogpost
    })
    .then(function(response){

      console.log('response from add post is ',response);
       window.location.href='/home'



    })
  .catch(function(error){
    console.log(error);
  })

}
  render() {
    return (
      <div>

      <div className="body">
      <h1>Enter the Content for your blog post</h1>
      <form className="user">
      <label>Subject</label><br/>
      <input type="text" onChange= {this.textChange.bind(this)} /><br/>
      <label>Content</label><br/>
      <textarea rows="5" cols="60" onChange= {this.tareaChange.bind(this)}/>
      <Button bsStyle="success"
      block className="btn"
               onClick = {this.blogresult.bind(this)}>Submit</Button>
      </form>
      </div>
      </div>
    );
  }
}
class ShowPost extends Component{
  constructor(props){
    super(props);
    this.state ={
      posts:[]
    };
  }
  componentDidMount(){
    var self=this;
    axios.post('/getPost' , {

    })
    .then(function(response){
      self.setState({posts:response.data})
      console.log(response.data)
    })
    .catch(function(error){
      console.log('error is ',error)
    });
  }
  render(){
    return(
      <div className="list">
      {
        this.state.posts.map(function(post ,index)
        {
          return <a href ="#" key = {index} className ="list-grp">
                   <h4 className ="topic">{post.subject}</h4>
                   <p className="body">{post.blogbody}</p>
                 </a>
    })
      }
      </div>
    )
  }
}


export default Postit ;
