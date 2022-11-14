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

  .post('/', async (req, res, next) => {
    try {
      const movie = await Movie.insert(req.body);
      res.json(movie);
    } catch (e) {
      next(e);
    }
  });
