const { setHeaders } = require("./contacts");

function getData(req, res) {
    setHeaders(res);
    res.status(200).send('Adam Robinson');
}

// routes.get('/', (req, res) => {
//     res.send('Adam Robinson');
// });

module.exports = {
    getData};