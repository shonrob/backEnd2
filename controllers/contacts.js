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

// a function that will use POST 
    async function createContact (req, res, next) {
        console.log(req.body);
        const response = await mongodb.getDb().db("cse341").collection("contact").insertOne(req.body);
        setHeaders(res);
        if (response.acknowledged) {
            res.status(201).json(response);    
        } else {
            res.status(500).json(response.error || "Sorry, error occured when creating contact");
        }
        
    };

// a function that will update a contact by id through put 
const updateContacts = async (req, res, next) => {
    const userId = new ObjectId(req.params.id);

    const response = await mongodb.getDb().db("cse341").collection("contact").replaceOne({_id: userId}, req.body);
    console.log(response);
    setHeaders(res);
    if (response.modifiedCount > 0){
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Sorry, there was an error while updating your contact.');
    }
};

const deleteContact = async (req, res, next) => {
    const userId = new ObjectId(req.params.id);
    const response = await mongodb.getDb().db("cse341").collection("contact").remove({_id: userId}, true); 
    console.log(response);
    setHeaders(res);
    if (response.deletedCount > 0 ) {
        res.status(200).send();
    } else {
        res.status(500).json(response.error || "Sorry, there was an error when you tried to delete the contact.");
    } 
};

function setHeaders(res) {
    res.setHeader("content-type", 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
}
module.exports = {
    getAll, getById, createContact, updateContacts, deleteContact, setHeaders
}

 