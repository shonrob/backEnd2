const routes = require('express').Router();
const connectContact = require('../controllers/contacts');


// routes.get('/', (req, res) => {
//     res.send('Adam Robinson');
// });

routes.get('/', connectContact.getAll);

routes.get('/:id', connectContact.getById);

module.exports = routes