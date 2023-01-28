const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    version: '',      // by default: '1.0.0'
    title: 'Contacts API',        // by default: 'REST API'
    description: 'Documentation to get my contacts',  // by default: ''
  },
  host: 'localhost:3000',      // by default: 'localhost:3000'
  basePath: '',  // by default: '/'
  schemes: [],   // by default: ['http']
};

// added this to see if it would work on render. 
const doc2 = {
  info: {
    version: '',      // by default: '1.0.0'
    title: 'Contacts API',        // by default: 'REST API'
    description: 'Documentation to get my contacts',  // by default: ''
  },
  host: 'cse341node5.onrender.com',      // by default: 'localhost:3000'
  basePath: '',  // by default: '/'
  schemes: [],   // by default: ['http']
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./routes/index.js'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as: index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc, doc2);



// in swagger-outputFile.json the host needs to read where you want it to deploy ie local host or on render. 