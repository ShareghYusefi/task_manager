const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    Task.findAll().then((result) => {
        res.status(200).send(result);
    }).catch((error)=> {
        res.status(404).send(error);
    });
})

router.post('/', (req, res) => {
    let task = req.body;
    Task.create(task).then((result) => {
        res.redirect('/');
    }).catch((error) => {
        res.send(error);
    });
})

router.delete('/:id', (req, res)=>{
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

module.exports = router;