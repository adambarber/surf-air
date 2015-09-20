var React = require('react');
var QuestionBlock = require('../../components/faqs/QuestionBlock.js.jsx');
var DocumentTitle = require('react-document-title');

var GrowthFaqs = React.createClass({

  render: function() {
    return (
      <DocumentTitle title='Growth and Expansion | Frequently Asked Questions | Surf Air'>
        <div className='questions-list'>

          <QuestionBlock question='What are your plans for expansion?'>
            <p>
              With 65 aircraft on order, we plan to serve several new destinations
              including Santa Ana, Sacramento, San Diego, Monterey, Palm Springs, Sonoma,
              Mammoth Lakes, San Jose, Bakersfield, San Luis Obispo, and Scottsdale.
            </p>

            <p>
              Additional regions including Texas, Florida, and the Northeast are also
              part of our future expansion.
            </p>
          </QuestionBlock>
        </div>
      </DocumentTitle>
    );
  }

});

module.exports = GrowthFaqs;