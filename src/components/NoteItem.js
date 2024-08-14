import React from "react";

function NoteItem({ note, onNoteSelect }) {
  return (
    <li onClick={() => onNoteSelect(note)}>
      <h2>{note.title}</h2>
      <p>{note.body.substring(0, 50)}...</p> {/* Truncate body */}
    </li>
  );
}

export default NoteItem;
