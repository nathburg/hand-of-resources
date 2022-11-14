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
  });
