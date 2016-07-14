// NPM depedencies
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

// App depedencies
import { getBySlug } from './actions';

class ProjectItem extends React.Component {

  render () {

    return (
      <div>
        <h2>Project item</h2>
      </div>
    );
  }

  componentDidMount () {

    const { workSlug } = this.props.routeParams;
    this.props.getBySlug(workSlug);

  }

}

ProjectItem.needs = [
];

const mapStateToProps = state => {

  return {};
};

export default connect(mapStateToProps, { getBySlug })(ProjectItem);
