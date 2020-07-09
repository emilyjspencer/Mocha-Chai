import { expect } from "chai";
import Notes from './notes.js';

describe('Notes', () => {

  let noteApp = new Notes;

  it('has no notes', () => {
    expect(noteApp.notes).to.be.empty;
  });

  it('adds a new note to the notes array', () =>  {
    noteApp.createNote('Finish learning Mocha and Chai');
    noteApp.createNote('Learn how to integrate React with Rails')
    noteApp.createNote('Build the rest of the Meditation app');
    expect(noteApp.notes.length).to.equal(3);
  });
});

