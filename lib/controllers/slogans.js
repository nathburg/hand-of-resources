const { Router } = require('express');
const { Slogan } = require('../models/Slogan');

module.exports = Router()
  .get('/', async (req, res) => {
    const slogan = await Slogan.getAll();
    res.json(slogan);
  })

  .get('/:id', async (req, res) => {
    const slogan = await Slogan.getByID(req.params.id);
    res.json(slogan);
  })

  .post('/', async (req, res, next) => {
    try {
      const slogan = await Slogan.insert(req.body);
      res.json(slogan);
    } catch (e) {
      next(e);
    }
  });
