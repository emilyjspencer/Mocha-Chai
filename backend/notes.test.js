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
    noteApp.createNote('Finish Find Places', 7);
    expect(noteApp.notes.length).to.equal(4);
    expect(noteApp.notes[3].id).to.equal(4);
  });

  it('the note has an id and content', () => {
    expect(noteApp.notes[0].id).to.equal(1);
    expect(noteApp.notes[1].content).to.equal('Learn how to integrate React with Rails');
  });

  it('the note has an id, content, date and priority number', () => {
    expect(noteApp.notes[2].priorityNumber).to.equal(6);
    expect(noteApp.notes[1].date).not.to.equal(undefined);
  });

  it('a notes id is unique', () => {
    noteApp.createNote('1');
    noteApp.createNote('2');
    noteApp.delete(1)
    noteApp.createNote('3')
    expect(noteApp.notes[1].id).to.equal(3);
  });

  it('gets a note', () => {
    expect(noteApp.get(1).content).to.equal('Finish learning Mocha and Chai')
  });

  it('deletes a note', () =>  {
    noteApp.delete(2);
    expect(noteApp.notes.length).to.equal(2);
  });

  it('correctly deletes a note', () => {
    noteApp.createNote('1');
    noteApp.createNote('2');
    noteApp.createNote('3');
    noteApp.delete(0);
    noteApp.delete(2);
    expect(noteApp.get(1).id).to.equal(1);
  });

  
  it('edits a note', () => {
    noteApp.editNote(1, 'Learn React Native');
    expect(noteApp.notes[0].content).to.equal('Learn React Native');
  });

  it('correctly edits a note', () => {
    noteApp.createNote('1');
    noteApp.createNote('2');
    noteApp.createNote(1);
    noteApp.editNote(2, 'editNote')
    expect(noteApp.get(2).content).to.equal('editNote');
  });

  it('reads from the given file path', () => {
    let testFile = new Notes('/json/testNotes.json');
    expect(testFile.notes.length).to.equal(1)
  });

});

