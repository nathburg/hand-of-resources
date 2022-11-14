const { Router } = require('express');
const { Slogan } = require('../models/Slogan');

module.exports = Router().get('/', async (req, res) => {
  const slogan = await Slogan.getAll();
  res.json(slogan);
});
