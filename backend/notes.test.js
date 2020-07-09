import { expect } from "chai";
import Notes from './notes.js';

describe('Notes', () => {


  it('has no notes', () => {
    let noteApp = new Notes;
    expect(noteApp.notes).to.be.empty;
  });

  it('adds a new note to the notes array', () =>  {
    let noteApp = new Notes;
    noteApp.createNote('Finish learning Mocha and Chai');
    noteApp.createNote('Learn how to integrate React with Rails')
    noteApp.createNote('Build the rest of the Meditation app');
    expect(noteApp.notes.length).to.equal(3);
  });

  it('the note has an id and content', () => {
    let noteApp = new Notes;
    noteApp.createNote('Finish learning Mocha and Chai');
    noteApp.createNote('Learn how to integrate React with Rails')
    noteApp.createNote('Build the rest of the Meditation app');
    expect(noteApp.notes[0].id).to.equal(0);
    expect(noteApp.notes[1].content).to.equal('Learn how to integrate React with Rails');
  });
});

