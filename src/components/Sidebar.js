import React from "react";
import NoteList from "./NoteList";

function Sidebar({ notes, onNoteSelect, onNewNote }) {
  return (
    <div className="sidebar">
      <button onClick={onNewNote}>New</button>
      <NoteList notes={notes} onNoteSelect={onNoteSelect} />
    </div>
  );
}

export default Sidebar;
