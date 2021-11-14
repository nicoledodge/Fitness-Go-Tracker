const router = require("express").Router();
const workout = require("../models/workout.js");

//post the workouts
router.post("/api/workout", ({ body }, res) => {
    workout.create(body)
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});
//update workout exercise with put route
//get workut aggregate
// delete route

module.exports = router;
