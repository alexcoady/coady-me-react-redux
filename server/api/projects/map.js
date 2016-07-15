// NPM dependencies

// App dependencies
import { Project } from './index';

export const getBySlug = (slug) => {

  return Project.find({ slug });

};

export const getAll = () => {

  return Project.find();

};

export const addNew = (fields) => {

  let project = new Project(fields);

  return project.save();

};
