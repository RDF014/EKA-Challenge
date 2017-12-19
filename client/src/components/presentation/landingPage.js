import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = (props) => {
  return (
    <div>
      <h1>Welcome</h1>
      <button type='button'>
        <Link to='/user'>Sign Up</Link>
      </button>
    </div>
  )
}

export default LandingPage;
