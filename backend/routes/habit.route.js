const router = require('express').Router();
const Habit = require('./../models/Habit.model');


router.route('/').get((req, res) => {
    Habit.find()
        .then(habits => res.json(habits))
        .catch(err => res.sendStatus(500).json('Error: ' + err));
})

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = req.body.duration;
    const date = req.body.date;

    const newHabitEntry = new Habit({ username, description, duration, date });

    newHabitEntry.save()
        .then(() => res.json('Habit entry added'))
        .catch(err => res.sendStatus(500).json('Error: ' + err));

})

module.exports = router;