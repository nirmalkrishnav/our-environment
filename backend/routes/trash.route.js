const router = require('express').Router();
const Trash = require('./../models/Trash.model');


router.route('/').get((req, res) => {
    Trash.find()
        .then(trashes => res.json(trashes))
        .catch(err => res.sendStatus(500).json('Error: ' + err));
})

router.route('/add').post((req, res) => {
  

    const newTrashEntry = new Trash(req.body);
    newTrashEntry.save()
        .then(() => res.json('Trash entry added'))
        .catch(err => res.sendStatus(500).json('Error: ' + err));
});

module.exports = router;