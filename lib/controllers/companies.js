const { Router } = require('express');
const { Company } = require('../models/Company');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const company = await Company.getByID(req.params.id);
    res.json(company);
  })

  .post('/', async (req, res, next) => {
    try {
      const company = await Company.insert(req.body);
      res.json(company);
    } catch (e) {
      next(e);
    }
  })

  .put('/:id', async (req, res, next) => {
    try {
      const data = await Company.updateByID(req.params.id, req.body);
      res.json(data);
    } catch (e) {
      next(e);
    }
  })

  .get('/', async (req, res) => {
    const companies = await Company.getAll();
    res.json(companies);
  });
