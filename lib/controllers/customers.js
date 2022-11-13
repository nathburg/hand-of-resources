const { Router } = require('express');
const { Customer } = require('../models/Customer');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const customer = await Customer.getByID(req.params.id);
    res.json(customer);
  })

  .get('/', async (req, res) => {
    const customers = await Customer.getAll();
    res.json(customers);
  })

  .post('/', async (req, res, next) => {
    try {
      const customer = await Customer.insert(req.body);
      res.json(customer);
    } catch (e) {
      next(e);
    }
  });
