import React from 'react';
import { Link } from 'react-router';

class HeaderView extends React.Component {

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

export default HeaderView;
