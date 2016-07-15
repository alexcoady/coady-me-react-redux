// NPM dependencies
import axios from 'axios';

export const FETCH_ALL_PROJECTS = 'FETCH_ALL_PROJECTS';
const API_ROOT = `http://localhost:8080/api/projects`;

export const fetchAll = () => {

  return {
    type: FETCH_ALL_PROJECTS,
    promise: axios.get(API_ROOT)
  };
}
