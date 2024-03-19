

function NoteCard({note}){
   
    return (
        <div>
           {note.text}
           &nbsp;&nbsp;
           {note.createdAt}
        </div>
    )


}


export default NoteCard;