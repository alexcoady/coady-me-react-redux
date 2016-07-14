// NPM dependencies
import { combineReducers } from 'redux';
import _ from 'lodash';
import dp from 'deep-freeze';

// Module dependencies
import { GET_ALL_PROJECTS } from './actions';

const initialBySlugState = {};
dp(initialBySlugState);

export const bySlug = (state = initialBySlugState, action) => {

  switch (action.type) {
    case GET_ALL_PROJECTS: {
      let clone = { ...state };
      action.res.data.forEach(project => {
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
    case GET_ALL_PROJECTS: {
      let clone = state.concat(action.res.data.map(project => project.slug));
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

export default projects;
