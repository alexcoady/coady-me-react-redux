// NPM dependencies
import Immutable, { fromJS } from 'immutable';

// Module dependencies
import { GET_PROJECTS } from './actions';

const defaultState = new Immutable.List();

export default function projectsReducer (state = defaultState, action) {

  switch (action.type) {
    case GET_PROJECTS: {
      return state.concat(fromJS(action.res.data));
    }
    default:
      return state;
  }
}
