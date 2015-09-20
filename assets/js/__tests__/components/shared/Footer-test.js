jest.dontMock('../../../components/shared/Footer.js.jsx');
jest.dontMock('../../support/ReactRouterContext.js');

describe('Footer', function() {
  var React = require('react/addons');
  var TestUtils = React.addons.TestUtils;
  var ReactRouterContext = require('../../support/ReactRouterContext.js');
  var Footer = require('../../../components/shared/Footer.js.jsx');

  var TestFooter = ReactRouterContext(Footer, {});

  it('renders', function() {
    var footer = TestUtils.renderIntoDocument(
      <TestFooter />
    );
  });
});