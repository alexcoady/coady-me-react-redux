// NPM depedencies
import React from 'react';

// App depedencies
import Header from './header';

class AppView extends React.Component {

  render () {

    return (
      <div>
        <h1>The shared AppView component</h1>
        <Header />
        { this.props.children }
      </div>
    );
  }
}

export default AppView;
