// main overview  of routes 

const routes = require('express').Router();

routes.use('/contacts', require('./contacts'))

module.exports = routes;



