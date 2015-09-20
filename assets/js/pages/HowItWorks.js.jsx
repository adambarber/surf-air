require('../../less/components/how-it-works/_how_it_works_wrapper.less');

var React = require('react');
var DocumentTitle = require('react-document-title');
var PageHeader = require('../components/shared/PageHeader.js.jsx');

var PlaneOutline = require('../../images/plane-outline.png');
var PlaneOutlineFilled = require('../../images/plane-outline-filled.png');

var HomeCallToAction = require('../components/home/HomeCallToAction.js.jsx');
var HowItWorksStep = require('../components/how-it-works/HowItWorksStep.js.jsx');
var HowItWorks = React.createClass({

  render: function() {
    var pageTitle = 'How It Works';
    var pageSubHead = 'Everything You Need To Know About Surf Air'
    return (
      <DocumentTitle title='How Surf Air Works | Surf Air'>
        <div>
          <PageHeader title={pageTitle} subhead={pageSubHead} image='header5.jpg' />

          <div className='how-it-works-wrapper'>

            <div className='how-it-works-progress'>
              <HowItWorksStep name='Become A Member' number='1'>
                Your Surf Air experience starts when you become a member. First, tell a
                little about yourself, and your travel needs. From there, our conceirge
                will be in touch to complete to sign up process.
              </HowItWorksStep>

              <HowItWorksStep name='Book Your First Flight' number='2'>
                As a member, you'll have access to the Surf Air mobile app. You're
                able to book and manage flights right from your phone, whenever you want.
                When you're ready, book your first flight.
              </HowItWorksStep>

              <HowItWorksStep name='Arrive At The Airport' number='3'>
                Upon arrival at a Surf Air airport, you'll really notice just how much
                better the Surf Air way of travel is. No lines, no security, and no hassle.
                And each airport lounge is stocked with everything you need, like free
                snacks and wi-fi.
              </HowItWorksStep>

              <HowItWorksStep name='Get On Board' number='4'>
                From the lounge, you'll walk right on to the plane, and be taking off
                mere moments later. Relax and enjoy the quick ride on our small, BMW designed
                Pilatus PC-12 plane.
              </HowItWorksStep>

              <HowItWorksStep name='Experience Surf Air' number='5' enableHover={true}>
                <div className='plane-image-wrapper clearfix'>
                  <img className='plane-outline-filled' src={PlaneOutlineFilled}/>
                  <img className='plane-outline' src={PlaneOutline}/>
                </div>
              </HowItWorksStep>
            </div>


          </div>

          <HomeCallToAction />
        </div>
      </DocumentTitle>
    );
  }

});

module.exports = HowItWorks;