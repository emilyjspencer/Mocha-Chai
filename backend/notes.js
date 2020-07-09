class Notes {
    constructor() {
      this.notes = []
    }

    createNote = (content) => {
      let noteItem = {
        id: this.notes.length,
        content: content
      }
      this.notes.push(noteItem);
      return this.notes;
    }
  }

export default Notes;