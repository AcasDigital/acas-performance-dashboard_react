import React from 'react';
import './BetaBanner.css';

const Header = () => {
  return (
    <header className="page-banner">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <span className="beta-icon">BETA</span>
            This is a new service - your feedback will help us to improve it.
          </div>
        </div>
      </div>
    </header>

  );
}

export default Header;
