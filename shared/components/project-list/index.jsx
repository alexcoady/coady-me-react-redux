// NPM depedencies
import React from 'react';
import { connect } from 'react-redux';

// App depedencies
import ProjectSummary from './../project-summary';
import { getAll } from './actions';

class ProjectList extends React.Component {

  render () {

    let projects = this.props.projects.map(project => {
      return <ProjectSummary key={project.get('_id')} data={project} />
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

    if (!this.props.projects.size) {
      this.props.getAll();
    }
  }

}

ProjectList.needs = [
  getAll
];

const mapStateToProps = state => {

  return {
    projects: state.projects
  };
};

export default connect(
  mapStateToProps,
  { getAll }
)(ProjectList);
