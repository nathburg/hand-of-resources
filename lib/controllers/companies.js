const { Router } = require('express');
const { Company } = require('../models/Company');

module.exports = Router().get('/', async (req, res) => {
  const companies = await Company.getAll();
  res.json(companies);
});
