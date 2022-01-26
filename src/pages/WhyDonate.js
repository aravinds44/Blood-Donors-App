import React from 'react';
import Copyright from '../components/Copyright/Copyright';
import NavBar from '../components/NavBar/NavBar';
import "./WhyDonate.css"

function WhyDonate() {
  return <div>
        <NavBar/>
        <div className='donate-content'>
            
            <div className='container'>
            <h2>Why should I donate?</h2>
            <p>One Blood Donation  can save upto Three lives.</p>
            <p>After donating blood, the body works to replenish the blood loss. This stimulates the production of new blood cells and in turn, helps in maintaining good health.</p>
</div>
            
        </div>
        <Copyright/>
  </div>;
}

export default WhyDonate;
