const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        required:true,
        default: Date.now(),
    },
    exercises:{
        type: Array,
        required: true,
        },
});

const workout = mongoose.model('workout', workoutSchema);

module.exports = workout;