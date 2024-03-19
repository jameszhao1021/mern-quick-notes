import React from "react";
import { getData } from "../../utilities/users-api";
import NoteForm from "../../compoments/NoteForm";
import NoteDisplay from "../../compoments/NoteDisplay";
import { useEffect, useState } from 'react';
function MainPage(){

  const [notes, setNotes] = useState([]);

  useEffect(() => {
      fetchData();
  }, []);

  async function fetchData() {
      try {
          const receivedData = await getData();
          console.log('Received data:', receivedData);

          if (receivedData && receivedData.data && Array.isArray(receivedData.data)) {
              setNotes(receivedData.data);
          } else {
              console.error('Invalid data format:', receivedData);
          }
      } catch (error) {
          console.error('Error fetching data:', error);
      }
  }

  async function handleNoteAdded(newNote) {
      setNotes([...notes, newNote]); // Update notes state with the new note
  }

    return(
        <>
        <h1>Main Page</h1>
        <NoteForm onNoteAdded={handleNoteAdded}/>
        {/* <button onClick={handleCheckToken}>Check When My Login Expires</button> */}
       <NoteDisplay notes={notes} />
        </>
    )
}


export default MainPage