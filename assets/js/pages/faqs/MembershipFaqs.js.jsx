var React = require('react');
var Router = require('react-router');
var QuestionBlock = require('../../components/faqs/QuestionBlock.js.jsx');
var DocumentTitle = require('react-document-title');

var MembershipFaqs = React.createClass({

  render: function() {
    return (
      <DocumentTitle title='Membership | Frequently Asked Questions | Surf Air'>
      <div className='questions-list'>

        <QuestionBlock question='Is a Surf Air membership ideal for me?'>
          If you drive two to six hours regularly, you need a Surf Air membership.
          No need to waste valuable work (or play) time stuck in traffic or mile-long
          security lines. Traveling with Surf Air eliminates the pain, hassle, and wasted
          time that accompany current travel options. With all that extra time, you could
          be doing something important (like improving your golf game).
        </QuestionBlock>

        <QuestionBlock question='What are the benefits of a Surf Air membership?'>
          As part of an exclusive community, our members can book flights in under 30 seconds,
          arrive at their local airport just 15 minutes before flights depart, park for free,
          enjoy personal concierge service, and get exclusive offers from Surf Air partners.
        </QuestionBlock>

        <QuestionBlock question='How is Surf Air simplifying the entire flight experience?'>
          Quite simply, flying with Surf Air is a game changer. You can book limitless flights in 30
          seconds or less, free from lines and fees, arrive at the airport right before your flight,
          and take off in minutes with VIP treatment. It doesn't get better than that.
        </QuestionBlock>

        <QuestionBlock question='What makes a Surf Air membership different from flying private or charter?'>
          Flying in a private charter or jet can be expensive, with much planning required well in advance.
          With Surf Air, you can book flights minutes before departure and have the experience of flying in a
          private aircraft without the private jet price tag. However, Surf Air does fly on a schedule, so unlike
          chartered service, you’ll need to choose from our available flight times.
        </QuestionBlock>

        <QuestionBlock question='What makes a Surf Air membership different from flying with traditional commercial airlines?'>
          <p>
            Commercial air travelers are accustomed to the complicated, cumbersome, and expensive fees of the
            current flying experience. From tedious comparison-shopping to flight traffic and congestion at
            commercial airports to endless delays and crowded lines, air travelers waste valuable time and money
            daily.
          </p>

          <p>
            Becoming a Surf Air member introduces you to a revolutionary way to fly. It gives you the freedom of
            limitless flights, 30-second booking, and a new and easy arrive-and-fly process. This is how flying
            should be.
          </p>
        </QuestionBlock>

        <QuestionBlock question='What makes a Surf Air membership preferable to driving?'>
          <p>
            If you take frequent car trips for two-to-six hours at a time, you’re often faced with the choice
            of whether to fly or to drive. Since the current flying routine takes so much time and causes
            unnecessary hassle, driving may seem like the more appealing option. Though driving might save you
            money, you lose a great deal of time on the road.
          </p>

          <p>
            When you fly with Surf Air you save valuable time that you would otherwise spend driving. Surf Air gets
            you to your destination quickly and allows you to work or relax while you fly hassle-free.
          </p>
        </QuestionBlock>

        <QuestionBlock question='May I invite someone to join me on the flight?'>
          Of course. We want our members to share this experience with family and friends by purchasing guest passes.
        </QuestionBlock>

        <QuestionBlock question='How does Surf Air membership work for businesses? Is there a business group plan?'>
          Surf Air memberships are tied directly to each individual. Business requirements are incredibly unique, so we
          partner with certain companies to create custom plans that suit their needs. If you’re interested in other
          corporate or business membership options, please contact us at membercare@surfair.com for consideration.
        </QuestionBlock>

        <QuestionBlock question='How can the Surf Air membership benefit my business team?'>
          <p>
            Nothing says you care about your employees quite like offering them an exclusive, unlimited,
            first-class travel benefit as part of your compensation package. A Surf Air membership is an
            attractive and prestigious benefit for both the employee and the business, since an employee's
            membership allows him or her to fly for both business and personal travel at no additional charge
            to the employee or company.
          </p>

          <p>
            If your organization has an incentive, reward, or recognition program, a membership could quickly
            become the most coveted benefit in your portfolio. Your Employee of the Year could earn exclusive,
            unlimited first-class travel. (Talk about boosting company morale.)
          </p>
        </QuestionBlock>

        <QuestionBlock question='How does the Surf Air community work?'>
          At Surf Air you aren't just a passenger; you're a valued member. We strive to create an exclusive and
          very real community of travelers enjoying a new and better way to travel—a community where personal
          relationships are nurtured and fostered. Strengthening this community is the integration of social media
          into our booking system, giving members the option to share their flights through their social networks
          and display their profiles to their fellow Surf Air members. With Surf Air, you're part of a cultivated
          community that can benefit your life beyond your everyday flying experience.
        </QuestionBlock>

        <QuestionBlock question='What if I want to cancel my membership?'>
          After a three-month introductory membership period, you can cancel your membership with 30-day notice
          via email or phone, using the contact information provided at the end of this document. Learn more in our
          Membership Agreement.
        </QuestionBlock>

        <QuestionBlock question='Are there any fees for changing my flight?'>
          No. We don’t think fees should be part of a new and better way to travel, and we never want to
          nickel-and-dime our members. With Surf Air, there are no hidden charges or additional fees.
        </QuestionBlock>

        <QuestionBlock question='What are the luggage fees?'>
          There are no luggage fees. We want to get you and your bags wherever you need to go as easily as possible.
          Each Surf Air member may bring 30 lbs. of luggage on each flight.
        </QuestionBlock>

        <QuestionBlock question='What other fees are there?'>
          There are none. Really. That's not how we do business. We’re offering a simple, better
          flying experience, so your monthly membership covers everything. We’ll gladly fly you and
          your bags as often as you'd like, for one flat monthly rate.
        </QuestionBlock>

      </div>
      </DocumentTitle>
    );
  }

});
module.exports = MembershipFaqs;