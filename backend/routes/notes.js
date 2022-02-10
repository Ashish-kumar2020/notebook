const express = require('express');
const fetchUser = require('../middleware/fetchUser');
const Note = require('../models/Note');
const router = express.Router();
const { body, validationResult } = require('express-validator');

// Route 1: Get all the Note using: GET "/Note/fetchallNote". Login required
router.get('/fetchallnotes', fetchUser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id });
        res.json(notes);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// Route 2: Add a new Note using: POST "/Note/addnote". Login required
router.post('/addnote', fetchUser, [
    body('title', 'Enter a valid Name').isLength({ min: 3 }),
    body('description', 'Discription must be atleast 3 characters').isLength({ min: 3 }),], async (req, res) => {
        try {
            const { title, description, tag } = req.body;
            // if there are errors, return Bad request and the errors
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const note = new Note({
                title, description, tag, user: req.user.id
            })
            const savedNote = await note.save();
            res.json(savedNote);
        } catch (error) {
            console.log(error.message);
            res.status(500).send("Internal Server Error");
        }
    })

module.exports = router;