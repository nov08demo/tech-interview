const { expect } = require('chai');

const Camera = require('../src/camera');

//a collection of test cases that test a specific component
describe('This is your first test case', () => {
  //test a function for a specific case
  it('camera distance returns whatever the value is passed into', () => {
    const c = new Camera();
    expect(c.getDistance(10)).to.equal(10);
  });
});
