let assert = require('assert');

describe('the length of the string', () => {

  it('returns the number of characters in a string', () => {
    assert.equal('Emily is learning how to use Mocha and Chai'.length, 43);
  });

  it('returns the first character of the string', () => {
    assert.equal('Emily is learning how to use Mocha and Chai'.charAt(0), 'E');
  });

  it('returns the length of the string', () => {
    let string = 'Mocha is a testing framework';
    assert.equal(string.length, '28');
  })

  it('return the last character of the string', () => {
    let string = 'Chai is an assertion library, not using at the moment';
    assert.equal(string.charAt(string.length-1), 't'); 
  });
});

