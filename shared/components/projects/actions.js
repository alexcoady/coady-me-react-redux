// NPM dependencies
import axios from 'axios';

export const GET_PROJECTS = 'GET_PROJECTS';
const API_ROOT = `http://localhost:8080/api/projects`;

export function getProjects () {

  return {
    type: GET_PROJECTS,
    promise: axios.get(API_ROOT)
  };
}
