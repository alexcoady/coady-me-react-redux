// NPM depedencies
import React from 'react';
import { Link } from 'react-router';

// App depedencies

class ProjectSummaryView extends React.Component {

  render () {

    const { name, slug } = this.props.data;

    return (
      <article className="ProjectSummary">
        <h1>{ name }</h1>
        <Link className="ProjectSummary-link" to={"/work/"+slug}>{ name }</Link>
      </article>
    );
  }

}

export default ProjectSummaryView;
