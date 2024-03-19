import { useState } from 'react';
import { sendForm } from '../utilities/users-api';

function NoteForm({ onNoteAdded }){
    const [noteForm, setNoteForm] = useState({})
    

    function handleChange(e){
        setNoteForm({...noteForm, [e.target.name]:e.target.value})
    }
   async function handleSubmit(e){
        e.preventDefault();
        const createdAt = new Date().toISOString();
        const noteWithTimestamp = { ...noteForm, createdAt };
    
       await sendForm(noteWithTimestamp)
       if (typeof onNoteAdded === 'function') {
        onNoteAdded(noteWithTimestamp);
    }
    }

    return (
        <div>
            <form autoComplete="off" onSubmit={handleSubmit}>
               <label>Note</label>
               <textarea name="text" id="text" cols='5' rows='10' onChange={handleChange}></textarea>
               <button type='submit'>Submit</button>
            </form>
        </div>
    )


}


export default NoteForm;