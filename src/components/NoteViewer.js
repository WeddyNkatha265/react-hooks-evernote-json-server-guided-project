import React from "react";

function NoteViewer({ note, onEdit }) {
  return (
    <div>
      <h2>{note.title}</h2>
      <p>{note.body}</p>
      <button onClick={onEdit}>Edit</button>
    </div>
  );
}

export default NoteViewer;
