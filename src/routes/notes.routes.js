const { Router } = require("express");
const router = Router();

const {
    renderNoteForm,
    createNewNote,
    renderNotes,
    renderEditForm,
    updateNote,
    deleteNote
} = require("../controllers/notes.controller");

// New note
router.get("/notes/add", renderNoteForm);

router.post("/notes/add", createNewNote);

// Get all notes
router.get("/notes", renderNotes);

// Edit note
router.get("/notes/edit/:id", renderEditForm);

router.put("/notes/edit/:id", updateNote);

// Delete note
router.delete("/notes/delete/:id", deleteNote);

module.exports = router;