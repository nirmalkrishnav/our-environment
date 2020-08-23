const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
require('dotenv').config();



// app files
const trashRouter = require('./routes/trash.route');
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

app.use('/trash', trashRouter);

app.listen(port, () => {
    console.log(`🚀 Backend service is running on http://localhost:${port}`)
})