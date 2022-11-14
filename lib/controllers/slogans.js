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

  .put('/:id', async (req, res, next) => {
    try {
      const data = await Slogan.updateByID(req.params.id, req.body);
      res.json(data);
    } catch (e) {
      next(e);
    }
  })

  .delete('/:id', async (req, res, next) => {
    try {
      const data = await Slogan.delete(req.params.id);
      if (!data) next();
      res.status(204);
      res.send();
    } catch (e) {
      next(e);
    }
  })

  .post('/', async (req, res, next) => {
    try {
      const data = await Slogan.insert(req.body);
      res.json(data);
    } catch (e) {
      next(e);
    }
  });
