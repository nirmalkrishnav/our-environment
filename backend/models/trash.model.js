const mongoose = require('mongoose');

const schema = mongoose.Schema;

const trashModel = new schema({
    lng: {
        type: Number,
        required: true,
    },
    lat: {
        type: Number,
        required: true
    },
    intensity: {
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

const Trash = mongoose.model('Trash', trashModel);

module.exports = Trash;