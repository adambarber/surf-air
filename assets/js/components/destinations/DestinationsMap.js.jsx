require('../../../less/components/destinations/_destinations_map.less');

var React = require('react/addons');
var ReactGoogleMaps = require('react-google-maps');
var GoogleMap = ReactGoogleMaps.GoogleMap;

var DestinationMarker = require('./DestinationMarker.js.jsx');

var DestinationsMap = React.createClass({
  panWithOffset: function(point, xOffset, yOffset) {
    var map = this.refs.map;
    map.panTo(point)
    map.panBy(xOffset, yOffset)
  },
  selectDestinationBySlug: function(destinations, slug) {
    var selectedDestination = destinations.filter(function(destination) {
      if(slug === destination.slug) {
        return destination
      }
    });
    return selectedDestination[0]
  },
  renderDestinations: function() {
    var _self = this;
    return _self.props.destinations.map(function(destination, idx) {
      var destinationClick = _self.props.onDestinationClick
      var isSelected = _self.props.selectedDestination === destination.slug
      return <DestinationMarker onDestinationClick={destinationClick} isSelected={isSelected} destination={destination} key={'destination-marker-' + destination.slug}/>
    });
  },
  componentWillReceiveProps: function(nextProps) {
    var nextDestination = this.selectDestinationBySlug(nextProps.destinations, nextProps.selectedDestination);
    if(nextDestination) {
      var newCenter = nextDestination.loc;
      var newZoomLevel = 8;
      var callback = this.panWithOffset.bind(this, newCenter, 0, -100)
    } else {
      var newCenter = this.state.defaultMapCenter
      var newZoomLevel = this.state.defaultMapZoom
      var callback = function(){};
    }
    this.setState({
      mapCenter: newCenter,
      zoomLevel: newZoomLevel
    }, callback)
  },
  componentDidMount: function() {
    var nextDestination = this.selectDestinationBySlug(this.props.destinations, this.props.selectedDestination);
    if(nextDestination) {
      var _self = this;
      setTimeout(function() {
        _self.panWithOffset(nextDestination.loc, 0, -100)
      }, 50)
    }
  },
  getInitialState: function() {
    var defaultMapZoom = 6;
    var defaultMapCenter = {lat: 35.413677, lng: -117.761719};
    var destinations = this.props.destinations;
    var selectedDestinationSlug = this.props.selectedDestination
    var selectedDestination = this.selectDestinationBySlug(destinations, selectedDestinationSlug);
    var mapCenter = selectedDestination ? selectedDestination.loc : defaultMapCenter;
    var mapZoom = selectedDestination ? 8 : defaultMapZoom;
    return {
      defaultMapCenter: defaultMapCenter,
      defaultMapZoom: defaultMapZoom,
      zoomLevel: mapZoom,
      mapCenter: defaultMapCenter
    };
  },
  render: function() {
    var state = this.state;
    var mapStyles = { height: "600px" };
    var options = {
      draggable: false,
      zoomControl: false,
      panControl: false,
      streetViewControl: false,
      scrollwheel: false
    }
    return (
      <div className='destinations-map-wrapper' >
        <GoogleMap
          containerProps={{ ...this.props, style: mapStyles }}
          zoom={state.zoomLevel}
          center={state.mapCenter}
          options={options}
          ref='map'>
          {this.renderDestinations()}
        </GoogleMap>
      </div>
    );
  }

});

module.exports = DestinationsMap;