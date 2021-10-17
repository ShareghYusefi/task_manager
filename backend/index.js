const express = require('express');
const app = express();
const config = require('./config');
const Task = require ('./models/Tasks');
// Allow different URL's to communicate with our server through CORS middleware
const cors = require('cors');
app.use(cors());

app.get('/', (req, res) => {
    Task.findAll().then((result) => {
        res.status(200).send(result);
    }).catch((error)=> {
        res.status(404).send(error);
    });
})

app.listen(3000, () => {
    console.log('Server is on port 3000...');
});