// The file is the entry point of the application 

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongodb = require('./db/connect')

app.use('/', require('./routes/index'))

// app.listen(port,() => {
//     console.log(`Running on port ${port}`)

// })
mongodb.initDb((error, mongodb) => {
    if (error) console.log(error)
    else {
        app.listen(port)
        console.log("listening on this port");
    }
})