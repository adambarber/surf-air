var React = require('react/addons');
var Reflux = require('reflux');

var HomePageStore = require('../stores/HomePageStore.js');
var HomePageActions = require('../actions/HomePageActions.js');

var HomeHero = require('../components/home/HomeHero.js.jsx');
var HomeFeatureSection = require('../components/home/HomeFeatureSection.js.jsx');
var HomeFeatures = require('../components/home/HomeFeatures.js.jsx');
var HomeLogos = require('../components/home/HomeLogos.js.jsx');
var HomeCallToAction = require('../components/home/HomeCallToAction.js.jsx');


var Home = React.createClass({
  mixins: [
    React.addons.PureRenderMixin,
    Reflux.listenTo(HomePageStore, 'onStoreChange')
  ],
  onScroll: function(e) {
    var scrollPosition = e.srcElement.body.scrollTop + 92;
    if(scrollPosition >= this.state.convenientContainerPosition) {
      this.setState({stickyFeaturesBar: true, selectedFeature: 'convenient'})
    } else if(scrollPosition >= this.state.fastContainerPosition) {
      this.setState({stickyFeaturesBar: true, selectedFeature: 'fast'})
    } else if(scrollPosition >= this.state.easyContainerPosition) {
      this.setState({stickyFeaturesBar: true, selectedFeature: 'easy'})
    } else if(scrollPosition >= this.state.simpleContainerPosition) {
      this.setState({stickyFeaturesBar: true, selectedFeature: 'simple'})
    } else {
      this.setState({stickyFeaturesBar: false, selectedFeature: null})
    }
  },
  componentDidMount: function() {
    require('smoothscroll');
    this.setState({
      featureBarPosition: this.refs.featureBar.getDOMNode().offsetTop,
      simpleContainerPosition: this.refs.simple.getDOMNode().offsetTop,
      easyContainerPosition: this.refs.easy.getDOMNode().offsetTop,
      fastContainerPosition: this.refs.fast.getDOMNode().offsetTop,
      convenientContainerPosition: this.refs.convenient.getDOMNode().offsetTop
    });
    window.addEventListener('scroll', this.onScroll);
  },
  componentWillUnmount: function() {
    window.removeEventListener('scroll', this.onScroll);
  },
  onStoreChange: function(trigger) {
    if(trigger.event === 'SCROLL-TO-FEATURE') {
      var container = this.refs[trigger.slug].getDOMNode();
      var offset = container.offsetTop - 92;
      window.smoothScroll(offset, 500)
    }
  },
  getInitialState: function() {
    return {
      selectedFeature: null,
      stickyFeaturesBar: false,
      featureBarPosition: 0,
      simpleContainerPosition: 0,
      easyContainerPosition: 0,
      fastContainerPosition: 0,
      convenientContainerPosition: 0
    };
  },
  render: function() {
    var selectedFeature = this.state.selectedFeature;
    return (
      <div className='page-wrapper home-page'>
        <HomeHero />
        <HomeFeatures selectedFeature={selectedFeature} sticky={this.state.stickyFeaturesBar} ref='featureBar'/>

        <div className='home-features-wrapper'>
          <div className='home-features-inner'>

            <HomeFeatureSection slug='simple' name='Become A Member, Get Unlimited Flights' bg='slide6.jpg' ref='simple' selectedFeature={selectedFeature}>
              Whether you fly once a month, or once a day,
              Surf Air is your ticket to making air travel painless.
            </HomeFeatureSection>

            <HomeFeatureSection slug='easy' name='Book and Manage Flights From Your Phone' bg='slide1.jpg' ref='easy' selectedFeature={selectedFeature}>
              With just your phone, you can book, cancel, or reschedule your flights. Have a question?
              Just give the concierge a call.
            </HomeFeatureSection>

            <HomeFeatureSection slug='fast' name='Never Wait For Your Flight Again' bg='slide4.jpg' ref='fast' selectedFeature={selectedFeature}>
              Surf Air thinks waiting in the airport lounge is a waste of time. Instead, Surf Air members
              can park their car, and board without delay.
            </HomeFeatureSection>

            <HomeFeatureSection slug='convenient' name='90 Flights A Day, To Everywhere You Want To Go' bg='slide2.jpg' ref='convenient' selectedFeature={selectedFeature}>
              With 90 scheduled flights every day, you can fly on your schedule. Get where you need to
              go when you want to be there.
            </HomeFeatureSection>
          </div>
        </div>

        <HomeLogos />
        <HomeCallToAction />
      </div>
    );
  }

});

module.exports = Home;