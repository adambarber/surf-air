var React = require('react');
var DocumentTitle = require('react-document-title');
var QuestionBlock = require('../../components/faqs/QuestionBlock.js.jsx');

var ExperienceTravelInfo = React.createClass({

  render: function() {
    return (
      <DocumentTitle title='In Flight Experience | Travel Info | Surf Air'>
        <div className='questions-list'>

          <QuestionBlock question='What kind of aircraft do you fly?'>
            We fly the Pilatus PC-12, a beautiful, eight-seat aircraft with a BMW-designed
            executive interior—so you’ll always have a spacious and comfortable leather seat.
          </QuestionBlock>

          <QuestionBlock question='Are the aircraft loud?'>
            Our aircraft are quieter than many private jets; inside our aircraft,
            you'll be able to sleep, work, or comfortably talk with the other members.
          </QuestionBlock>

          <QuestionBlock question='Who flies the aircraft?'>
            Surf Air pilots have graduated from the best aviation universities and have
            flown thousands of passengers on commercial, military, charter, and private
            aircraft. We've selected each of our pilots based on their experience, desire
            to be the absolute best in the field, unwavering commitment to safety, and
            passion for genuine personal service.
          </QuestionBlock>

          <QuestionBlock question='Is there a restroom on the aircraft?'>
            Yes. There is a small private restroom on each of our aircraft.
            Candidly, on an aircraft this size you’ll want to avoid using it.
          </QuestionBlock>

          <QuestionBlock question='How many bags may I bring?'>
            Members can bring one piece of luggage, such as a small day bag. Luggage
            should be less than 30 pounds and outside measurements should not exceed
            a linear 44 inches.
          </QuestionBlock>

          <QuestionBlock question='Do I have Wi-Fi on the aircraft?'>
            No, but our airports have complimentary Wi-Fi service.
          </QuestionBlock>

          <QuestionBlock question='What if my flight gets canceled due to weather?'>
            Despite our most valiant efforts, we cannot control the weather. Weather
            may cause disruptions; for instance, the Santa Ana winds may blow or the
            coastal fog may roll in, preventing our aircraft from taking off or landing.
            We'll do our best to make up the time, but cannot guarantee that flights
            will occur as planned.
          </QuestionBlock>

        </div>
      </DocumentTitle>
    );
  }

});

module.exports = ExperienceTravelInfo;