// import { useEffect, useState } from 'react';
// import { getData } from '../utilities/users-api';

// function NoteDisplay(){
//     const [notes, setNotes] = useState([]);
//     useEffect(() => {
//         fetchData();
//     }, []);

//     async function fetchData(){
//           const receivedNotes = await getData();
//           console.log(receivedNotes)
//            setNotes(receivedNotes)
        
//     }


//     const noteDisplay = notes.data.map(note => (
//             <NodeCard key={note.id} note={note} />
//         ))
   

//     return (
//         <div>
//            {noteDisplay}
//         </div>
//     )


// }


// export default NoteDisplay;

import { useEffect, useState } from 'react';
import { getData } from '../utilities/users-api';
import NoteCard from './NoteCard';
import {fetchData} from '../utilities/fetchData';

function NoteDisplay({ notes }) {
   

  
   

    const noteDisplay = notes.map((note, index) => (
        <NoteCard key={index} note={note} />
    ));

    return (
        <div>
            {noteDisplay}
        </div>
    );
}

export default NoteDisplay;