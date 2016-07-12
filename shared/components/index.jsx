// NPM depedencies
import React from 'react';

// App depedencies
import Header from './header';
import Projects from './projects';

class AppView extends React.Component {

  render () {

    return (
      <div>
        <h1>The shared AppView component</h1>
        <Header />
        <Projects />
        { this.props.children }
      </div>
    );
  }
}

export default AppView;
