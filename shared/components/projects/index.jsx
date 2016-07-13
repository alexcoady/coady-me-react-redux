// NPM depedencies
import React from 'react';
import { connect } from 'react-redux';

// App depedencies
import ProjectSummary from './../project-summary';
import { getProjects } from './actions';

class ProjectsView extends React.Component {

  render () {

    let projects = this.props.projects.map(project => {
      return <ProjectSummary key={project.get('_id')} data={project} />
    });

    return (
      <div>
        <h2>Projects</h2>
        <p>The following are my projects....</p>
        {projects}
      </div>
    );
  }

  componentDidMount () {

    if (!this.props.projects.size) {
      this.props.getProjects();
    }
  }

}

ProjectsView.needs = [
  getProjects
];

const mapStateToProps = state => {

  return {
    projects: state.projects
  };
};

const mapDispatchToProps = dispatch => {

  return {
    getProjects: () => {
      dispatch(getProjects());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectsView);
