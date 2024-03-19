const User = require('../../models/user')
const Note = require('../../models/Note')


async function getNote(req, res) {
    try {
        
        req.body.user = req.user._id;
        const user = req.body.user;
       
        const notes = await Note.find({user:user});
        console.log('see the getNote nodes: ', notes)
        // Send the fetched plants as JSON response
        res.json({ data: notes });
    } catch (err) {
      // Client will check for non-2xx status code 
      // 400 = Bad Request
      res.status(400).json(err);
    }
  }
   


async function addNote(req, res) {
    try {
        console.log('see request from api: ', req.body)
      // Add the user to the database
      const text = req.body.text; 
      req.body.user = req.user._id;
      const user = req.body.user;
      console.log('see user: ', user)
       const newNote = new Note({
                text, user
             })
       await newNote.save();
       res.status(201).json({ message: 'Note added successfully' });
    } catch (err) {
      // Client will check for non-2xx status code 
      // 400 = Bad Request
      res.status(400).json(err);
    }
  }
   
    
  module.exports = {
    getNote,
    addNote,
    
  };