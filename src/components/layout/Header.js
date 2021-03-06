import React from 'react';
import Contact from './Contact';

const Header = () => {
  return (
    <div className='sticky-top'>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        </div>
        <Contact />
      </nav>
    </div>
  )
};

export default Header;
