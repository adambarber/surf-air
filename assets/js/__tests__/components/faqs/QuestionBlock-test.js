jest.dontMock('../../../components/faqs/QuestionBlock.js.jsx');
jest.dontMock('../../support/ReactRouterContext.js');

describe('QuestionBlock', function() {
  var React = require('react/addons');
  var TestUtils = React.addons.TestUtils;
  var ReactRouterContext = require('../../support/ReactRouterContext.js');
  var QuestionBlock = require('../../../components/faqs/QuestionBlock.js.jsx');

  var TestQuestionBlock = ReactRouterContext(QuestionBlock, {});

  it('renders', function() {
    var questionBlock = TestUtils.renderIntoDocument(
      <TestQuestionBlock />
    );
  });
});