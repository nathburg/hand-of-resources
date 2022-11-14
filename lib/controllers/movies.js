const { Router } = require('express');
const { Movie } = require('../models/Movie');

module.exports = Router()
  .get('/', async (req, res) => {
    const movies = await Movie.getAll();
    res.json(movies);
  })

  .get('/:id', async (req, res) => {
    const movie = await Movie.getByID(req.params.id);
    res.json(movie);
  })

  .delete('/:id', async (req, res, next) => {
    try {
      const data = await Movie.delete(req.params.id);
      if (!data) next();
      res.status(204);
      res.send();
    } catch (e) {
      next(e);
    }
  })

  .put('/:id', async (req, res, next) => {
    try {
      const data = await Movie.updateByID(req.params.id, req.body);
      res.json(data);
    } catch (e) {
      next(e);
    }
  })

  .post('/', async (req, res, next) => {
    try {
      const movie = await Movie.insert(req.body);
      res.json(movie);
    } catch (e) {
      next(e);
    }
  });
