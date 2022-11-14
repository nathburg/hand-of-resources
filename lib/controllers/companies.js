const { Router } = require('express');
const { Company } = require('../models/Company');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const company = await Company.getByID(req.params.id);
    res.json(company);
  })

  .get('/', async (req, res) => {
    const companies = await Company.getAll();
    res.json(companies);
  });
