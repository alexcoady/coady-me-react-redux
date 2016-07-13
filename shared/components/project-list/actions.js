// NPM dependencies
import axios from 'axios';

export const GET_ALL_PROJECTS = 'GET_ALL_PROJECTS';
const API_ROOT = `http://localhost:8080/api/projects`;

export function getAll () {

  return {
    type: GET_ALL_PROJECTS,
    promise: axios.get(API_ROOT)
  };
}
