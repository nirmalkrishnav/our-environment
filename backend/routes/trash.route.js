const router = require('express').Router();
const Trash = require('./../models/Trash.model');


router.route('/').get((req, res) => {
    Trash.find()
        .then(trashes => res.json(trashes))
        .catch(err => res.sendStatus(500).json('Error: ' + err));
})

router.route('/add').post((req, res) => {
    console.log(req.body);
    const lng = req.body.lng;
    const lat = req.body.lat;
    const intensity = req.body.intensity;
    const date = req.body.date;

    const newTrashEntry = new Trash({ lng, lat, intensity, date });
    newTrashEntry.save()
        .then(() => res.json('Trash entry added'))
        .catch(err => res.sendStatus(500).json('Error: ' + err));
});

module.exports = router;