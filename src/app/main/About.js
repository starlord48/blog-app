import React from 'react';
import './css/Main.css';
import Sidebar from './Sidebar';

const About = () => (
<div><Sidebar className="side"/><h1 className="top-title">About</h1>
  <div className="styles">

  This blog is made in React.
  Router is used to navigate from one page to another.
  The Database used is mongodb.NodeJS is used in backend .
ExpressJs is used as middleware.User can sign up by navigating to the sign up page.
If a user has not logged in then they can click on new user in order to log in by entering their name and password.
and emailId.After creating a profile they can sign in.A session is created for each user.  </div>
<div  className="pic"></div>
</div>);





export default About;
