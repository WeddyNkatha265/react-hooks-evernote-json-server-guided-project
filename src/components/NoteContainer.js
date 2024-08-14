import React, { useState, useEffect } from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

function NoteContainer() {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch notes when the component mounts
  useEffect(() => {
    fetch("http://localhost:3000/notes")
      .then((response) => response.json())
      .then((data) => setNotes(data));
  }, []);

  // Handle selecting a note
  const handleNoteSelect = (note) => {
    setSelectedNote(note);
  };

  // Handle creating a new note
  const handleNewNote = () => {
    const newNote = {
      title: "New Note",
      body: "Write something here...",
      userId: 1,
    };

    fetch("http://localhost:3000/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(newNote),
    })
      .then((response) => response.json())
      .then((createdNote) => {
        setNotes([...notes, createdNote]);
        setSelectedNote(createdNote);
      });
  };

  // Filter notes by search query
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Search searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <div className="container">
        <Sidebar
          notes={filteredNotes}
          onNoteSelect={handleNoteSelect}
          onNewNote={handleNewNote}
        />
        <Content note={selectedNote} />
      </div>
    </>
  );
}

export default NoteContainer;
