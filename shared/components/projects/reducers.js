// NPM dependencies
import Immutable from 'immutable';

const defaultState = new Immutable.List();

export default function projectsReducer (state = defaultState, action) {

  console.log(`projectsReducer`, action.type);

  return state;
}
