jest.dontMock('../routes.js.jsx');
jest.dontMock('./support/ReactRouterContext.js');

describe('Routes', function() {
  var Routes = require('../routes.js.jsx');
  var ReactRouterContext = require('./support/ReactRouterContext.js');

  it('returns true', function() {
    expect(true).toBe(true)
  });
});