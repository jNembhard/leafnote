import React, { useState, useEffect } from "react";
import Heading from "./Heading";
import CreateArea from "./CreateArea";
import Note from "./Note";
import Footer from "./Footer";

function App() {
  const [items, setItems] = useState([]);

  function addNote(newNote) {
    setItems((prevItems) => {
      return [...prevItems, newNote];
    });
  }

  function deleteNote(id) {
    setItems((prevItems) => {
      return prevItems.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <div>
        <Heading />
        <CreateArea onAdd={addNote} />
        {items.map((noteItem, index) => (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onChecked={deleteNote}
          />
        ))}
        <Footer />
      </div>
    </div>
  );
}

export default App;
