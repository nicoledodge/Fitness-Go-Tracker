const router = require("express").Router();
const Workout = require("../models/workout.js");

//post the workouts
router.post("/api/workout", ({ body }, res) => {
    Workout.create(body)

        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

//update workout exercise with put route
//findbyid
router.put("/api/transaction", (req, res) => {
    Workout.findByIdAndUpdate(
        res.id,
        { $push:{ exercises: req }},
        // "runValidators" will ensure new exercises meet our schema requirements
        { new: true}
    )

        //new exercises need to meet schema requirements lol but how??
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

//get workut aggregate
router.get("/api/workout", (req, res) => {
        Workout.aggregate([{
            $addFields: {
                totalDuration: {
                    $sum: "$exercises.duration"
                }
            }
        }
    ])
        // .sort({ date: -1 })
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/api/workout/range", (req, res) => {
    Workout.aggregate(
        [{
            $addFields: {
                totalDuration: {
                    $sum: "$exercises.duration"
                }
            }
        }]
    )
        .sort({ date: -1 }).limit(7)
        //need a limit structured the same as sort
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// delete route - find id and delete?
router.post("/api/workout", ({ body }, res) => {
    Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});
module.exports = router;
