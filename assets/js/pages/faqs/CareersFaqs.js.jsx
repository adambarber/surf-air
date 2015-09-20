var React = require('react');
var QuestionBlock = require('../../components/faqs/QuestionBlock.js.jsx');
var DocumentTitle = require('react-document-title');

var CareersFaqs = React.createClass({

  render: function() {
    return (
      <DocumentTitle title='Careers | Frequently Asked Questions | Surf Air'>
      <div className='questions-list'>
        <QuestionBlock question='What are the career or internship opportunities available at Surf Air?'>
          We are building an exceptional team of professionals looking to revolutionize the flying
          experience. Please click here to go directly to our Careers page.
        </QuestionBlock>
      </div>
      </DocumentTitle>
    );
  }

});

module.exports = CareersFaqs;