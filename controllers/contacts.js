// get the connect file from the database folder 
const { ObjectID } = require('bson');
const ObjectId = require('mongodb').ObjectId;

const mongodb = require('../db/connect');

// a function that will return the db with all contacts
async function getAll(request, response) {
    // getting the information from the mongo db site 
    const result = await mongodb.getDb().db("cse341").collection("contact").find();

    result.toArray().then(list => {
        response.setHeader("Content-Type", "application/json");
        response.status(200).json(list);
    });

};

// a function that will return the db with contact by id
    const getById = async (request, response) => {
    const userId = new ObjectId(request.params.id);
//     // getting the information from the mongo db site 
    const result = await mongodb.getDb().db("cse341").collection("contact").find({ _id: userId});
    

    result.toArray().then(list => {
        response.setHeader("Content-Type", "application/json")
        response.status(200).json(list);
    });

};


module.exports = {
    getAll, getById
}

 