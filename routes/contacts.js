const routes = require('express').Router();
const connectContact = require('../controllers/contacts');


routes.get('/', connectContact.getAll);

routes.get('/:id', connectContact.getById);

routes.post('/', connectContact.createContact); 

routes.put('/:id', connectContact.updateContacts);

routes.delete('/:id', connectContact.deleteContact); 


module.exports = routes;