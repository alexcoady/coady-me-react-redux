// NPM depedencies
import React from 'react';
import { connect } from 'react-redux';

// App depedencies
import ProjectSummary from './../project-summary';
import { fetchAll } from './actions';
import { getAllProjects } from './../../reducers';

class ProjectList extends React.Component {

  render () {

    let projects = this.props.projects.map(project => {
      return <ProjectSummary key={project._id} data={project} />
    });

    return (
      <div>
        <h2>ProjectList</h2>
        <p>The following are my projects....</p>
        {projects}
      </div>
    );
  }

  componentDidMount () {

    if (!this.props.projects.length) {
      this.props.fetchAll();
    }
  }

}

ProjectList.needs = [
  fetchAll
];

const mapStateToProps = state => {

  return {
    projects: getAllProjects(state)
  };
};

export default connect(
  mapStateToProps,
  { fetchAll }
)(ProjectList);
