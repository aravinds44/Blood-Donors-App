import React from 'react';
import Copyright from '../components/Copyright/Copyright';
import NavBar from '../components/NavBar/NavBar';

function About() {
  return <div>
    <NavBar/>
    <div style={{marginTop:"200px", textAlign:"center", fontWeight:"600", height:'50vh'}}><p>For support contact aravindsaji70@gmail.com</p></div>
    <Copyright/>
      
  </div>;
}

export default About;
