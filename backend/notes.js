class Notes {
    constructor() {
      this.notes = []
    }

    createNote = (content, priorityNumber) => {
      let noteItem = {
        id: this.notes.length,
        content: content,
        priorityNumber: priorityNumber,
        date: new Date()
      }
      this.notes.push(noteItem);
      return this.notes;
    }

    get = (id) => {
      return this.notes[id];
    }

    delete(id) {
      let found = this.notes[id]
      return this.notes.pop(found);
    }

    editNote(id, newContent) {
      this.notes[id].content = newContent;
      return this.notes[id];
    };

  }

export default Notes;