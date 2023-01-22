// main overview  of routes 
const routes = require('express').Router();
const connectIndex = require('../controllers/index');


// routes.get('/', (req, res) => {
//     res.send('Adam Robinson');
// });

routes.get('/', connectIndex.getData);

// routes.use('/contacts', require('./contacts'))

module.exports = routes;



