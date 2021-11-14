const router = require("express").Router();
const Workout = require("../models/workout.js");

//post the workouts
router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)

        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

//update workout exercise with put route
//findbyid
router.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(
        res.id,
        { $push:{ exercises: req }},

        { new: true}
    )

        //new exercises need to meet schema requirements lol but how??
        .then((dbWorkouts) => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

//get workut aggregate
router.get("/api/workouts", (req, res) => {
        Workout.aggregate([{
            $addFields: {
                totalDuration: {
                    $sum: "$exercises.duration"
                }
            }
        }
    ])
        // .sort({ date: -1 })
        .then((dbWorkouts) => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/api/workouts/range", (req, res) => {
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
        .then((dbWorkouts) => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// delete route - find id and delete?
router.delete("/api/workouts", ({ body }, res) => {
    Workout.findByIdAndDelete(body.id)
        .then(() => {
            res.json(true);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});
module.exports = router;
