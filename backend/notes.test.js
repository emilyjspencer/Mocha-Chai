import { expect } from "chai";
import Notes from './notes.js';

describe('Notes', () => {

  let noteApp;

  beforeEach(() => {
    noteApp = new Notes();
  })

  it('adds a new note to the notes array', () =>  {
    noteApp.createNote('Finish learning Mocha and Chai');
    noteApp.createNote('Learn how to integrate React with Rails')
    noteApp.createNote('Build the rest of the Meditation app');
    expect(noteApp.notes.length).to.equal(3);
  });

  it('the note has an id and content', () => {
    noteApp.createNote('Finish learning Mocha and Chai');
    noteApp.createNote('Learn how to integrate React with Rails')
    noteApp.createNote('Build the rest of the Meditation app');
    expect(noteApp.notes[0].id).to.equal(0);
    expect(noteApp.notes[1].content).to.equal('Learn how to integrate React with Rails');
  });

  it('the note has an id, content, date and priority number', () => {
    noteApp.createNote('Finish learning Mocha and Chai', 9);
    noteApp.createNote('Learn how to integrate React with Rails', 4)
    noteApp.createNote('Build the rest of the Meditation app', 6);
    expect(noteApp.notes[2].priorityNumber).to.equal(6);
    expect(noteApp.notes[1].date).not.to.equal(undefined);
  });
});

