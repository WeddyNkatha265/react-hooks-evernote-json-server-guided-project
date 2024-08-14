import React from "react";

function Search({ searchQuery, onSearchChange }) {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search notes..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}

export default Search;
