const express = require('express');

const app = express();

// Built in middleware
app.use(express.json());

// App routes
app.use('/customers', require('./controllers/customers'));
app.use('/cars', require('./controllers/cars'));
app.use('/movies', require('./controllers/movies'));
app.use('/companies', require('./controllers/companies'));
app.use('/slogans', require('./controllers/slogans'));

// Error handling & 404 middleware for when
// a request doesn't match any app routes
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
