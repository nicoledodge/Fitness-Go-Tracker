const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {},
    exercises:[{
        type: {},
        name: {},
        duration: {},
        weight: {},
        reps: {},
        sets: {},
        distance: {},

        },
    ],
});

const workout = mongoose.model('workout', workoutSchema);

module.exports = workout;