import React, { useState } from "react";
import NoteViewer from "./NoteViewer";
import NoteEditor from "./NoteEditor";
import Instructions from "./Instructions";

function Content({ note }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = (updatedNote) => {
    // Send PATCH request to update the note
    fetch(`http://localhost:3000/notes/${updatedNote.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(updatedNote),
    })
      .then((response) => response.json())
      .then(() => {
        setIsEditing(false);
      });
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const getContent = () => {
    if (!note) {
      return <Instructions />;
    }
    if (isEditing) {
      return (
        <NoteEditor note={note} onSave={handleSave} onCancel={handleCancel} />
      );
    }
    return <NoteViewer note={note} onEdit={handleEdit} />;
  };

  return <div className="master-detail-element detail">{getContent()}</div>;
}

export default Content;
