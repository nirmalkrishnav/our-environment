const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
require('dotenv').config();



// app files
const habitRouter = require('./routes/habit.route');
const userRouter = require('./routes/user.route');

const app = express();
const port = process.env.PORT || 5500;

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log(`📚 Established connection to MongoDb`);
})

app.use(cors());
app.use(express.json());

app.use('/habits', habitRouter);
app.use('/users', userRouter);


app.listen(port, () => {
    console.log(`🚀 Backend service is running on http://localhost:${port}`)
})