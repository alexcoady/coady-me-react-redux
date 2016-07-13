// NPM depedencies
import React from 'react';
import { connect } from 'react-redux';
import Immutable from 'immutable';

// App depedencies
import ProjectSummary from './../project-summary';
import { getProjects } from './actions';

class ProjectsView extends React.Component {

  render () {

    console.log(`ProjectsView->render()`, this.props)

    let projects = this.props.projects.map(project => {
      return <ProjectSummary key={project.get('_id')} data={project} />
    });

    return (
      <div>
        <h2>Projects</h2>
        {projects}
      </div>
    );
  }

  componentDidMount () {

    console.log(`ProjectsView->componentDidMount()`, this.props.projects.size)

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

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsView);
