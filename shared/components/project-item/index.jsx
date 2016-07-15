// NPM depedencies
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

// App depedencies
import { fetchBySlug } from './actions';
import { getProjectBySlug } from './../../reducers';

class ProjectItem extends React.Component {

  render () {

    if (!this.props.project) {
      return (
        <div>
          <h2>LOADING</h2>
        </div>);
    }

    const { name, slug } = this.props.project;

    return (
      <div>
        <h2>{ name }</h2>
        <p>Slug: { slug }</p>
      </div>
    );
  }

  componentDidMount () {

    if (!this.props.project) {
      this.props.fetchBySlug(this.props.routeParams.workSlug);
    }

  }

}

ProjectItem.needs = [
  fetchBySlug
];

const mapStateToProps = (state, ownProps) => {

  const slug = ownProps.routeParams.workSlug;

  return {
    project: getProjectBySlug(state, slug)
  };
};

export default connect(mapStateToProps, { fetchBySlug })(ProjectItem);
