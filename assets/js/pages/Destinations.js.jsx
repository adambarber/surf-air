require('../../less/components/destinations/_destinations_content_wrapper.less');

var React = require('react/addons');
var Router = require('react-router');

var DocumentTitle = require('react-document-title');
var PageHeader = require('../components/shared/PageHeader.js.jsx');
var HomeCallToAction = require('../components/home/HomeCallToAction.js.jsx');
var DestinationsMap = require('../components/destinations/DestinationsMap.js.jsx');
var DestinationsList = require('../components/destinations/DestinationsList.js.jsx');

var DestinationStore = require('../stores/DestinationStore.js');
var destinations = DestinationStore.destinations;

var Destinations = React.createClass({
  mixins: [
    React.addons.PureRenderMixin,
    Router.History,
    Router.State
  ],
  onDestinationClick: function(destination) {
    var slug = destination.slug
    var currentDestination = this.state.selectedDestination;
    if(currentDestination === slug) {
      this.history.pushState(null, '/destinations', {});
      this.setState({selectedDestination: null })
    } else {
      this.history.pushState(null, '/destinations/' + slug + '/', {});
      this.setState({selectedDestination: slug })
    }
  },
  getInitialState: function() {
    var selectedDestination = this.props.location.destination
    return {
      selectedDestination: selectedDestination
    };
  },
  render: function() {
    var documentTitle = 'Where We Fly | Destinations | Surf Air'
    var pageTitle = 'Destinations';
    var pageSubHead = "Where Surf Air Flys. Hint: It's A Lot."
    var selectedDestination = this.state.selectedDestination;
    return (
      <DocumentTitle title={documentTitle}>
        <div>
          <PageHeader title={pageTitle} subhead={pageSubHead} image='header4.jpg' />
          <div className='destinations-content-wrapper'>
            <DestinationsList destinations={destinations} onDestinationClick={this.onDestinationClick} selectedDestination={selectedDestination}/>
            <DestinationsMap destinations={destinations} onDestinationClick={this.onDestinationClick} selectedDestination={selectedDestination}/>
          </div>
          <HomeCallToAction />
        </div>
      </DocumentTitle>
    );
  }

});

module.exports = Destinations;