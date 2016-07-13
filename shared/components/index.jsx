// NPM depedencies
import React from 'react';

// App depedencies
import Header from './header';

class App extends React.Component {

  render () {

    return (
      <div>
        <h1>Alex Coady</h1>
        <Header />
        { this.props.children }
      </div>
    );
  }
}

export default App;
