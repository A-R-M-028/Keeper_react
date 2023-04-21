import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  //This is a React hook called useState, 
  //which allows you to add state to a functional component in React.
  // init empty array useState HOOK
  //it defines update the state using 
  //adding new note & delete new note
  const [notes, setNotes] = useState([]);

  //The setNotes function is part of React's useState hook, 
  //which takes an initial state value and 
  //returns an array of two values: 
  //the current state value and 
  //a function that can be used to update the state. 
  //When you call setNotes, you pass a callback function 
  //that takes the previous state as an argument and 
  //returns a new state value.
  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }
  //The callback function will receive the previous state value as an 
  //argument and then return the new state value based on that previous state.
  //By using a callback function, we can be sure that we're always working with the latest state value
  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
// this is the main component of the app
//it manages state of note and render ->
//header, footer, createArea, note
