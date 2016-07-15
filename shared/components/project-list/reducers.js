// NPM dependencies
import { combineReducers } from 'redux';
import _ from 'lodash';
import dp from 'deep-freeze';

// Module dependencies
import { FETCH_ALL_PROJECTS } from './actions';
import { FETCH_PROJECT_BY_SLUG } from './../project-item/actions';

const initialBySlugState = {};
dp(initialBySlugState);

export const bySlug = (state = initialBySlugState, action) => {

  switch (action.type) {
    case FETCH_PROJECT_BY_SLUG:
    case FETCH_ALL_PROJECTS: {
      let clone = { ...state };
      let projects = [].concat(action.res.data)
      projects.forEach(project => {
        clone[project.slug] = project;
      });
      return clone;
    }
    default:
      return state;
  }
}

const initialAllSlugsState = [];
dp(initialAllSlugsState);

export const allSlugs = (state = initialAllSlugsState, action) => {

  switch (action.type) {
    case FETCH_ALL_PROJECTS: {
      let projects = [].concat(action.res.data);
      let clone = state.concat(projects.map(project => project.slug));
      // Removes duplicates
      return _.uniq(clone);
    }
    default:
      return state;
  }
}

const projects = combineReducers({
  bySlug,
  allSlugs
});

export const getAll = (state) => {
  return state.allSlugs.map(slug => state.bySlug[slug]);
}

export const getBySlug = (state, slug) => {
  return state.bySlug[slug];
}

export default projects;
