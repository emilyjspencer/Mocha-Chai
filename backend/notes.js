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
  }

export default Notes;