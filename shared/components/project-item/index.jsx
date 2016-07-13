// NPM depedencies
import React from 'react';
import { connect } from 'react-redux';
import Immutable from 'immutable';

// App depedencies

class ProjectItem extends React.Component {

  render () {

    return (
      <div>
        <h2>Project item</h2>
        { JSON.stringify(this.props) }
      </div>
    );
  }

}

ProjectItem.needs = [
];

const mapStateToProps = state => {

  return {};
};

const mapDispatchToProps = dispatch => {

  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectItem);
