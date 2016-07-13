// NPM dependencies
import axios from 'axios';

export const GET_PROJECT_BY_SLUG = 'GET_PROJECT_BY_SLUG';
const API_ROOT = `http://localhost:8080/api/projects/`;

export const getBySlug = slug => {

  console.log(`getBySlug (${slug})`);

  return {
    type: GET_PROJECT_BY_SLUG,
    promise: axios.get(API_ROOT + slug)
  };
}
