const mongoose = require('mongoose');

const schema = mongoose.Schema;

const trashModel = new schema({
    loc: {
        properties: {
            name: {
                type: String
            },
            type: {
                type: String
            }
        },
        geometry: {
            coordinates: []
        }
    }
})

const Trash = mongoose.model('Trash', trashModel);

module.exports = Trash;