const mongoose = require('mongoose');

const schema = mongoose.Schema;

const habitSchema = new schema({
    username: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        required: true
    }
},
    {
        timestamps: true
    }
)

const Habit = mongoose.model('Habit', habitSchema);

module.exports = Habit;