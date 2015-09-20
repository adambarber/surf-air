var React = require('react');
var DocumentTitle = require('react-document-title');
var QuestionBlock = require('../../components/faqs/QuestionBlock.js.jsx');

var ReservationsTravelInfo = React.createClass({

  render: function() {
    return (
      <DocumentTitle title='Reservations | Travel Info | Surf Air'>
        <div className='questions-list'>

          <QuestionBlock question='How far in advance of my desired flight will I be able to reserve my seat?'>
            As a member, you’re able to book flights four weeks in advance or up to fifteen (minutes) before your
            flight (if seats are still available). We hope to make the reservation process as simple as possible.
            Login to your account on your computer or mobile device, choose your destinations and reserve.
            That's it. Thirty seconds and you're done. Pretty fantastic.
          </QuestionBlock>

          <QuestionBlock question='How many flights may I reserve?'>
            You can reserve two, four, or six reservations at any given time (based on your
            membership plan). As soon as you fly one of your reservations,
            your reservation list is instantly refreshed, allowing you to book your next
            flight. (Just FYI: Connecting flights require the use of two flight passes.)
          </QuestionBlock>

          <QuestionBlock question='What if the flight I want is booked?'>
            If you click on a flight that’s fully booked, you can easily add yourself to
            the waitlist in case there are changes and the flight becomes available.
            We will honor the order of our members on the waitlist, so once a seat becomes
            available, if you're the next on the list you’ll have the option to book it.
            Of course, you can always book in advance to secure the reservation day and
            time you want.
          </QuestionBlock>

          <QuestionBlock question="How do I cancel a reservation if I'm not going to make it?">
            Easy. Log in to the Surf Air mobile app, select the flight, and tap Cancel. Again,
            there are no fees for cancelation. We encourage you to cancel if you know
            you're not going to make it, so that a seat may open up for another member who
            wishes to fly. The first time you aren't able to cancel twenty-four hours before
            your flight, there will be no penalty. After that, if you forget to cancel at
            least twenty-four hours before the plane leaves the ground, we will block one
            of your reservations for twenty-one days. It's our way of encouraging you to be
            courteous to your fellow Surf Air members.
          </QuestionBlock>

          <QuestionBlock question='What if I miss my flight?'>
            If you happen to miss your flight and fail to cancel twenty-four hours before your
            plane leaves, we will have to block one of your reservations for twenty-one days.
            Of course, you'll still be able to book and fly using your remaining reservations
            during that time, but we want to encourage you to be responsible to the Surf Air
            community and allow the full flying benefit to your fellow members.
          </QuestionBlock>

        </div>
      </DocumentTitle>
    );
  }

});

module.exports = ReservationsTravelInfo;