
import { useState } from "react";
import noteContext from "./noteContext";




const NoteState = (props) => {
  const notesInitial = [
    {
      "_id": "6204b65d7ae6a9e64b8db5b0",
      "user": "62049982f84ce1d2857a26ef",
      "title": "My Title",
      "description": "Wake up early as soon as possible",
      "tag": "personal",
      "date": "2022-02-10T06:53:17.058Z",
      "__v": 0
    },
    {
      "_id": "62052d22aefb18183a4df73e",
      "user": "62049982f84ce1d2857a26ef",
      "title": "Updated dd scjdkadhfuejbufjehvTitle",
      "description": "Wake up early as soon as possible",
      "tag": "general",
      "date": "2022-02-10T15:20:02.620Z",
      "__v": 0
    },
    {
      "_id": "62052d22aefb18183a4df733e",
      "user": "62049982f84ce1d2857a26ef",
      "title": "Updated dd scjdkadhfuejbufjehvTitle",
      "description": "Wake up early as soon as possible",
      "tag": "general",
      "date": "2022-02-10T15:20:02.620Z",
      "__v": 0
    }
    // {
    //   "_id": "62052d22aefb18183a4df73e3",
    //   "user": "62049982f84ce1d2857a26ef",
    //   "title": "Updated dd scjdkadhfuejbufjehvTitle",
    //   "description": "Wake up early as soon as possible",
    //   "tag": "general",
    //   "date": "2022-02-10T15:20:02.620Z",
    //   "__v": 0
    // }
  ]

  const [notes, setNotes] = useState(notesInitial)
  // const s1 = {
  //     "name": "Ashish",
  //     "class": "5b"
  // }
  // const [state,setState] = useState(s1);
  // const update = ()=>{
  //     setTimeout(() =>{
  //         setState({
  //             "name": "Kumar",
  //             "class": "B.Tech"
  //         })
  //     }, 2000);
  // }

  // Add a note
  const addNote = (title,description,tag) => {
      const note = {
        "_id": "879472t7841cbtgfc23729",
        "user": "62049982f84ce1d2857a2dsfbg6ef",
        "title": title,
        "description": description,
        "tag": tag,
        "date": "2022-02-10T15:21:02.620Z",
        "__v": 0
      };
      setNotes(notes.concat(note))
  }
  // delete a note
  const deleteNote = (id) => {
      console.log("Deleting a note with id : " + id);
      const newNotes = notes.filter((note) => {return note._id!== id})
      setNotes(newNotes);
  }

  // edit a nopte
  const editNote = () => {

  }
  return (
    <noteContext.Provider value={{ notes, addNote,editNote,deleteNote}}>
      {props.children}
    </noteContext.Provider>
  )
}



export default NoteState;