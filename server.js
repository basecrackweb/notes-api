const express = require('express');
const bodyParser = require('body-parser');

//create express app
const app = express();

//parsing requests (urlencoded)
app.use(bodyParser.urlencoded({ extended: true }))

//parsing json requests
app.use(bodyParser.json())

//configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log('Succesfully connected to the database');
}).catch(err => {
    console.log('Could not connect to the database.', err);
    process.exit();
});

//routing
app.get('/notesapp', (req,res) => {
    res.json({'message': 'Notes App. Organize and keep track of notes.'})
});
app.get('/', (req,res) => {
    res.json({'message': 'Asjid Kalam (@0dinshell). Website is under construction'})
});
require('./app/routes/note.routes.js')(app);

//listening
app.listen(3000, ()=> {
    console.log('Server is listening on port 3000...')
})