const notesCtrl = {};
const Note = require("../models/Note");

notesCtrl.renderNoteForm = (req, res) => {
    res.render("notes/new-note");
};

notesCtrl.createNewNote = (req, res) => {
    const { title, description } = req.body;
    const newNote = new Note({ title, description });
    res.send(newNote);
};

notesCtrl.renderNotes = (req, res) => {
    res.send("Render notes");
}

notesCtrl.renderEditForm = (req, res) => {
    res.send("Render edit form");
};

notesCtrl.updateNote = (req, res) => {
    res.send("Update note");
};

notesCtrl.deleteNote = (req, res) => {
    res.send("Delete note");
}

module.exports = notesCtrl;