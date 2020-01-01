module.exports = (app) => {
    const notes = require('../controllers/note.controller.js');

    //create a new note
    app.post('/notes', notes.create);

    //retrive all notes
    app.get('/notes', notes.findAll);

    //retireve a single note with nodeId
    app.get('/notes/:noteId', notes.findOne);

    //update a note with nodeId
    app.put('/notes/:noteId', notes.update);

    //delete a note with noteId
    app.delete('/notes/:noteId', notes.delete);
}