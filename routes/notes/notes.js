const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/note/notes');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


router.post('/send-note', notesCtrl.addNote);
router.get('/get-note', notesCtrl.getNote);



module.exports = router;