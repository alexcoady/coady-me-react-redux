// NPM dependencies
import projects, * as ProjectReducer from './components/project-list/reducers';

export default {
  projects
};

export const getAllProjects = (state) => {
  return ProjectReducer.getAll(state.projects);
}

export const getProjectBySlug = (state, slug) => {
  return ProjectReducer.getBySlug(state.projects, slug);
}
