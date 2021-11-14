const router = require("express").Router();
const workout = require("../models/workout.js");

//post the workouts
router.post("/api/workout", ({ body }, res) => {
    workout.create(body)

        .then(dbworkout => {
            res.json(dbworkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

//update workout exercise with put route
//findbyid
router.put("/api/transaction", (req, res) => {
    workout.findByIdAndUpdate({})
        //new exercises need to meet schema requirements lol but how??
        .then((dbworkout) => {
            res.json(dbworkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

//get workut aggregate
router.get("/api/workout", (req, res) => {
    workout.aggregate([
        {
            //research aggregate functions to determine total duration
        }
    ])
        // .sort({ date: -1 })
        .then((dbworkout) => {
            res.json(dbworkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/api/workout/range", (req, res) => {
    workout.aggregate([
        {
            //research aggregate functions to determine total duration
        }
    ])
        .sort({ date: -1 })
        //need a limit structured the same as sort
        .then((dbworkout) => {
            res.json(dbworkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// delete route - find id and delete?
router.post("/api/workout", ({ body }, res) => {
    workout.create(body)
        .then(dbworkout => {
            res.json(dbworkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});
module.exports = router;
