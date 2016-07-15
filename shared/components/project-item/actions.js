// NPM dependencies
import axios from 'axios';

export const FETCH_PROJECT_BY_SLUG = 'FETCH_PROJECT_BY_SLUG';
const API_ROOT = `http://localhost:8080/api/projects/`;

export const fetchBySlug = slug => {

  console.log(`fetchBySlug (${slug})`);

  return {
    type: FETCH_PROJECT_BY_SLUG,
    promise: axios.get(API_ROOT + slug)
  };
}
