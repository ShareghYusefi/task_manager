const express = require('express');
const app = express();
const config = require('./config');
const Task = require ('./models/Tasks');
// Allow different URL's to communicate with our server through CORS middleware
const cors = require('cors');
app.use(cors());
// Middleware to handle json and url encoded requests
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/', (req, res) => {
    Task.findAll().then((result) => {
        res.status(200).send(result);
    }).catch((error)=> {
        res.status(404).send(error);
    });
})

app.post('/', (req, res) => {
    let task = req.body;
    Task.create(task).then((result) => {
        res.redirect('/');
    }).catch((error) => {
        res.send(error);
    });
})

app.delete('/:id', (req, res)=>{
    Task.findByPk(req.params.id).then((task) => {
        if(task){
            task.destroy().then((result) => {
                return res.status(200).send(result);
            });
        } else {
            return res.status(404).send("Could not find task in DB");
        }
    }).catch((error) => {
        return res.status(500).send(error);
    });
})

app.listen(3000, () => {
    console.log('Server is on port 3000...');
});