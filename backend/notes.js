import fs from 'fs';


class Notes {
    constructor(filepath) {
      this.filepath = filepath
      this.notes = filepath ? this.readFromJson() : []
    };

    readFromJson() {
      return JSON.parse(fs.readFileSync(
        __dirname + this.filepath, "utf8", (err, data) => {
        if (err) throw err
      })
      )
     }

  
    createNote = (content, priorityNumber) => {
      let noteItem = {
        id: newId(this.notes),
        content: content,
        priorityNumber: priorityNumber,
        date: new Date()
      }
      this.notes.push(noteItem);
      return this.notes;
    }

    get = (id) => {
      return this.notes.filter(note => note.id === id)[0]
    }

    delete(id) {
      this.notes = this.notes.filter(note => note.id !== id)
      return this.notes;
    }

    editNote(id, newContent) {
      let index = this.notes.findIndex(note => note.id === id);
      this.notes[index].content = newContent;
    };
    

  }

  
  const newId = (array) => {
    if (array.length > 0) {
      return array[array.length - 1].id + 1;
    } else {
      return 1
    };
   };

   
  
   
  
  

export default Notes;