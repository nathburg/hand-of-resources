const { Router } = require('express');
const { Car } = require('../models/Car');

module.exports = Router()
  .get('/', async (req, res) => {
    const cars = await Car.getAll();
    res.json(cars);
  })

  .get('/:id', async (req, res) => {
    const car = await Car.getByID(req.params.id);
    res.json(car);
  });
