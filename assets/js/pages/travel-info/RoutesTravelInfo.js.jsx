var React = require('react');
var DocumentTitle = require('react-document-title');
var QuestionBlock = require('../../components/faqs/QuestionBlock.js.jsx');

var RoutesTravelInfo = React.createClass({

  render: function() {
    return (
      <DocumentTitle title='Routes and Airports | Travel Info | Surf Air'>
        <div className='questions-list'>

          <QuestionBlock question='Where does Surf Air fly?'>
            We fly in and out of convenient local airports in California including
            San Carlos and Oakland in the San Francisco Bay Area, Hawthorne and Burbank
            in the Los Angeles Area, Truckee in Lake Tahoe, Santa Barbara, and Carlsbad.
            Surf Air does not operate flights outside of California. Surf Air will arrange
            for the availability of Las Vegas flights (operated by Advanced Air LLC, an
            FAA/DOT certificated air carrier) as the member's agent pursuant to the
            membership agreement.
          </QuestionBlock>

          <QuestionBlock question='What services will be at your airports?'>
            Our airports are outfitted with Wi-Fi, snacks, beverages, bathrooms, a
            comfortable lobby, plenty of outlets to charge your devices, free parking,
            and concierges on site. We want you to be comfortable in case you have to
            wait a few minutes for your plane to arrive.
          </QuestionBlock>
        </div>
      </DocumentTitle>
    );
  }

});

module.exports = RoutesTravelInfo;