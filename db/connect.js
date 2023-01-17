// get the dotenv dependency 
const dotenv = require('dotenv');

// start the dotenv dependency 
dotenv.config();

// get the mongo data base 
const MongoClient = require('mongodb').MongoClient;


// variable for the database 
let _db;

// initiate the database 
const initDb = (callback) => {
  if (_db) {
    console.log('Db is already initialized!');
    return callback(null, _db);
  }
//   connect to the database, I created. 
  MongoClient.connect(process.env.mongodb_uri)
    .then((client) => {
      _db = client;
      callback(null, _db);
    })
    .catch((err) => {
      callback(err);
    });
};

// when getting db if it doesn't go through thrown an error or run db
const getDb = () => {
  if (!_db) {
    throw Error('Db not initialized');
  }
  return _db;
};

// start the magic
module.exports = {
  initDb,
  getDb,
};