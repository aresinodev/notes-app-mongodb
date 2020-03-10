const notesCtrl = {};

notesCtrl.renderNoteForm = (req, res) => {
    res.send("Note add");
};

notesCtrl.createNewNote = (req, res) => {
    res.send("New note");
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