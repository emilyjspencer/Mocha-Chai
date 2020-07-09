




class Notes {
    constructor() {
      this.notes = []
    }

  

    createNote = (content, priorityNumber) => {
      let noteItem = {
        //id: this.notes.length,
        id: newId(this.notes),
        content: content,
        priorityNumber: priorityNumber,
        date: new Date()
      }
      this.notes.push(noteItem);
      return this.notes;
    }

    get = (id) => {
      //return this.notes[id];
      return this.notes.filter(note => note.id === id)[0]
    }

    delete(id) {
      this.notes = this.notes.filter(note => note.id !== id)
      //let found = this.notes[id]
      //return this.notes.pop(found);
      return this.notes;
    }

    editNote(id, newContent) {
      //this.notes[id].content = newContent;
      //return this.notes[id];
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