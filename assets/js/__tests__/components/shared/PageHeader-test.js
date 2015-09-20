jest.dontMock('../../../components/shared/PageHeader.js.jsx');

describe('PageHeader', function() {
  var React = require('react/addons');
  var TestUtils = React.addons.TestUtils;
  var PageHeader = require('../../../components/shared/PageHeader.js.jsx');

  it('renders', function() {
    var titleText = 'Test Title';
    var subheadText = 'Test Subhead';
    var pageHeader = TestUtils.renderIntoDocument(
      <PageHeader title={titleText} subhead={subheadText}/>
    );

    var title = TestUtils.findRenderedDOMComponentWithClass(pageHeader, 'page-title');
    var subhead = TestUtils.findRenderedDOMComponentWithClass(pageHeader, 'page-subhead');

    expect(React.findDOMNode(title).textContent).toEqual(titleText);
    expect(React.findDOMNode(subhead).textContent).toEqual(subheadText);
  });
});