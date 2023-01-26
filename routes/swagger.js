const routes = require('express').Router();
const swaggerUI = require('swagger-ui-express');

const swaggerDocs = require('../swagger-output.json');

routes.use('/api-docs', swaggerUI.serve);
routes.get('/api-docs', swaggerUI.setup(swaggerDocs));

module.exports = routes;