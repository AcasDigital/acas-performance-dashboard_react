import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
  return (
    <header className="page-header">
      <div className="container">
        <Link to="/">
          <img className="page-logo" src="./images/logo.png" alt="Acas logo" />
        </Link>  
      </div>
    </header>
  );
}

export default Header;
