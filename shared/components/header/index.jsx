import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {

  render () {

    return (
      <header>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </header>
    );
  }
}

export default Header;
