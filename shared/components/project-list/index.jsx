// NPM depedencies
import React from 'react';
import { connect } from 'react-redux';

// App depedencies
import ProjectSummary from './../project-summary';
import { getAll as fetchAll } from './actions';
import { getAll } from './reducers';

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

    if (!this.props.projects.size) {
      this.props.fetchAll();
    }
  }

}

ProjectList.needs = [
  fetchAll
];

const mapStateToProps = state => {

  return {
    projects: getAll(state.projects)
  };
};

export default connect(
  mapStateToProps,
  { fetchAll }
)(ProjectList);
