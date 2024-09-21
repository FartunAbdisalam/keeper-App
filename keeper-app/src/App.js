import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import noteArray from "./Constants";
import CreateArea from "./components/CreateArea";


function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote]
    })
  }

  function DeleteNote(id)
  {
    setNotes((prevNotes)=>
    {
      return prevNotes.filter((noteItem,index)=>
      {
        return index !== id;
      })
    })
  }


  return (
    <>
   <Header />
   <CreateArea onAdd={addNote} />

   {notes.map((noteItem,index) => {
    return <Note 
    key={index}
    id={index}
    title={noteItem.title}
   content= {noteItem.content}
   onDelete={DeleteNote}
    />
   })}

<Footer />
  
   </>
  );
}

export default App;


{/* {noteArray.map((noteItem) => ( 
   <Note 
  key={noteItem.id}
  title= {noteItem.title}
  des= {noteItem.des} /> ) )
    }  */}
