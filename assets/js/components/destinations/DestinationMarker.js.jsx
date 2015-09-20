var React = require('react/addons');
var ReactGoogleMaps = require('react-google-maps');
var Marker = ReactGoogleMaps.Marker;

var MarkerHighlight = require('../../../images/marker-highlight.png');
var MarkerFade = require('../../../images/marker-fade.png');

var DestinationOverlay = require('./DestinationOverlay.js.jsx');

var DestinationMarker = React.createClass({
  mixins: [
    React.addons.PureRenderMixin
  ],
  onClick: function(e) {
    this.props.onDestinationClick(this.props.destination)
  },
  renderInfoWindow: function() {
    if(this.props.isSelected) {
      return <DestinationOverlay {...this.props} />
    }
  },
  render: function() {
    var destination = this.props.destination;
    var loc = destination.loc;
    var icon = this.props.isSelected ? MarkerHighlight : MarkerFade;
    return (
      <div className='destination-marker-wrapper'>
        <Marker onHover={this.onHover}
          {...this.props}
          position={loc}
          label={destination.name}
          title={destination.name}
          onClick={this.onClick}
          icon={icon}/>

        {this.renderInfoWindow()}
      </div>
    );
  }
})


module.exports = DestinationMarker;