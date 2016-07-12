// NPM depedencies
import React from 'react';
import { connect } from 'react-redux';

// App depedencies


class ProjectsView extends React.Component {

  render () {

    console.log(this.props.projects);

    return (
      <div>
        <h2>Projects</h2>
      </div>
    );
  }
}

const mapStateToProps = state => {

  return {
    projects: state.projects
  };
};

export default connect(mapStateToProps)(ProjectsView);
