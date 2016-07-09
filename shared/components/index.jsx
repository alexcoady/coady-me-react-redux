import React from 'react';

class AppView extends React.Component {

  render () {

    return (
      <div>
        <h1>The shared AppView component</h1>
        { this.props.children }
      </div>
    );
  }
}

export default AppView;
