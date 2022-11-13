const { Router } = require('express');
const { Customer } = require('../models/Customer');

module.exports = Router()
.get('/', async (req, res) => {
  const customers = await Customer.getAll();
  res.json(customers);
});
