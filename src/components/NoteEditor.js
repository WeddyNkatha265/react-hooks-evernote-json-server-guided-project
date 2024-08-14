import React, { useState } from "react";

function NoteEditor({ note, onSave, onCancel }) {
  const [title, setTitle] = useState(note.title);
  const [body, setBody] = useState(note.body);

  const handleSave = () => {
    const updatedNote = { ...note, title, body };
    onSave(updatedNote);
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea value={body} onChange={(e) => setBody(e.target.value)} />
      <button onClick={handleSave}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
}

export default NoteEditor;
