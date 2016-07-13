// NPM depedencies
import React from 'react';
import { Link } from 'react-router';

// App depedencies

class ProjectSummaryView extends React.Component {

  render () {

    const project = this.props.data;
    const name = project.get('name');
    const slug = project.get('slug');

    return (
      <article className="ProjectSummary">
        <h1>{ name }</h1>
        <Link className="ProjectSummary-link" to={"/work/"+slug}>{ name }</Link>
      </article>
    );
  }

}

export default ProjectSummaryView;
