var React = require('react');
var QuestionBlock = require('../../components/faqs/QuestionBlock.js.jsx');
var DocumentTitle = require('react-document-title');

var SecurityFaqs = React.createClass({

  render: function() {
    return (
      <DocumentTitle title='Safety and Security | Frequently Asked Questions | Surf Air'>
        <div className='questions-list'>

          <QuestionBlock question='How safe are your aircraft?'>
            The Swiss-made Pilatus PC-12 is one of the most popular
            turbine-powered business aircraft on the market today. Around the
            globe, executive transport, cargo, air ambulance, airline, and
            government special mission operations have all trusted the PC-12 to get
            passengers to their destinations safely. Believing that optimum safety
            can only be achieved with products of exceptional quality, Pilatus has
            earned multiple industry-specific certificates and awards, including EN/AS 9100,
            the highest certification for an international aircraft manufacturer.
            For more information on the Pilatus PC-12, visit: www.pilatus-aircraft.com
          </QuestionBlock>

          <QuestionBlock question='What security measures do you use?'>
            As part of each membership application, we conduct thorough security checks on all members and guests.
          </QuestionBlock>
        </div>
      </DocumentTitle>
    );
  }

});

module.exports = SecurityFaqs;