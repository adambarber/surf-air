jest.dontMock('../../../components/shared/Header.js.jsx');
jest.dontMock('../../support/ReactRouterContext.js');

describe('Header', function() {
  var React = require('react/addons');
  var TestUtils = React.addons.TestUtils;
  var ReactRouterContext = require('../../support/ReactRouterContext.js');
  var Header = require('../../../components/shared/Header.js.jsx');

  var TestHeader = ReactRouterContext(Header, {});

  it('renders', function() {
    var header = TestUtils.renderIntoDocument(
      <TestHeader />
    );
  });
});