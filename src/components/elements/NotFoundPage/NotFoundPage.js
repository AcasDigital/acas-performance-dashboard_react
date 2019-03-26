import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1>This page does not exist.</h1>
      <Link to="/">Return to the home page.</Link>
    </div>
  )
}

export default NotFound;
