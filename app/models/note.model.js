const moongose = require('mongoose');

const NoteSchema = moongose.Schema({
    title: String,
    content: String
}, {
    timestamps: true
});

module.exports = moongose.model('Note', NoteSchema);