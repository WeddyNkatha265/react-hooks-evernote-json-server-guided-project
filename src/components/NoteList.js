import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onNoteSelect }) {
  return (
    <ul>
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} onNoteSelect={onNoteSelect} />
      ))}
    </ul>
  );
}

export default NoteList;
