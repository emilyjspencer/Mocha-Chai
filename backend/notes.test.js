import { expect } from "chai";
import Notes from './notes.js';

describe('Notes', () => {
  let noteApp = new Notes;
  it('has no notes', () => {
    expect(noteApp.notes).to.be.empty;
  });
});

