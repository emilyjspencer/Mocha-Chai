import { expect } from "chai";
import Notes from './notes.js';

describe('Notes', () => {

  let noteApp;

  beforeEach(() => {
    noteApp = new Notes();
    noteApp.createNote('Finish learning Mocha and Chai', 9);
    noteApp.createNote('Learn how to integrate React with Rails', 4)
    noteApp.createNote('Build the rest of the Meditation app', 6);
  })

  it('adds a new note to the notes array', () =>  {
    expect(noteApp.notes.length).to.equal(3);
  });

  it('the note has an id and content', () => {
    expect(noteApp.notes[0].id).to.equal(0);
    expect(noteApp.notes[1].content).to.equal('Learn how to integrate React with Rails');
  });

  it('the note has an id, content, date and priority number', () => {
    expect(noteApp.notes[2].priorityNumber).to.equal(6);
    expect(noteApp.notes[1].date).not.to.equal(undefined);
  });

  it('gets a note', () => {
    expect(noteApp.get(1).content).to.equal('Learn how to integrate React with Rails')
  });

  it('deletes a note', () =>  {
    noteApp.delete(2)
    expect(noteApp.notes.length).to.equal(2);
  });
});

