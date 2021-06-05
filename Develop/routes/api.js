const { Workout } = require('../models');
const router = require('express').Router();

router.post('/api/workouts', (req, res) => {
    console.log('req', req)
    Workout.create({}).then(dbWorkout => {
        res.json(dbWorkout)
    })
})

router.get('/api/workouts', (req, res) => {
    Workout.find().then(dbWorkout => {
        res.json(dbWorkout)
    }).catch(err => {
        console.log(err);
    })
});

router.put('/api/workouts/:id', (req, res) => {
    console.log('put req.body', req.body);
    console.log('out req.params', req.params.id);
    Workout.update({ _id: req.params.id }, { $push: { exercises: req.body } }).the(dbWorkout => {
        res.json(dbWorkout);
    })
});

router.get('/api/workouts/range', (req,res)=>{
    Workout.find().sort({day: -1}).then(dbWorkout =>{
        res.json(dbWorkout);
    }).catch(err => {
        console.log(err);
    })
})

module.exports = router;