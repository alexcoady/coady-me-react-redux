// NPM dependencies
import { Router } from 'express';
import { urlencoded } from 'body-parser';

// Shared dependencies

// App dependencies
import { getBySlug, getAll, addNew } from './projects/map';

// Module defintion
const router = Router();

router.get('/', (req, res, next) => {

  res.status(200).send('POW')

})

router.get('/projects/:projectSlug', (req, res) => {

  let slug = req.params.projectSlug;

  let promise = getBySlug(slug);
  promise.then(response => res.json(response));


});

router.get('/projects', (req, res) => {

  let promise = getAll();

  promise.then(response => res.json(response));

});

router.post('/projects', urlencoded({extended: true}), (req, res, done) => {

  let promise = addNew(req.body);

  promise.then(response => res.status(200).send(response));
  promise.catch(response => res.status(500).send(response));

})

export default router;
