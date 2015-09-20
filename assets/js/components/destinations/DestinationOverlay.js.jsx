require('../../../less/components/destinations/_destionation_overlay.less');

var React = require('react/addons');
var ReactGoogleMaps = require('react-google-maps');
var OverlayView = ReactGoogleMaps.OverlayView;

var DestinationOverlay = React.createClass({
  mixins: [
    React.addons.PureRenderMixin
  ],
  onCloseClick: function() {
    this.props.onDestinationClick(this.props.destination)
  },
  overlayOffset: function(width, height) {
    return {x: -(width / 2), y: -(height+60)};
  },
  renderBlurb: function() {
    if(this.props.destination.blurb) {
      return(
        <div className='blurb'>
          {this.props.destination.blurb}
        </div>
      )
    }
  },
  renderFooter: function() {
    if(this.props.destination.address) {
      return(
        <div className='destination-footer'>
          <i className='fa fa-map'></i>
          {this.props.destination.address}
        </div>
      )
    }
  },
  render: function() {
    var destination = this.props.destination;
    var backgroundImage = require('../../../images/destination-headers/' + destination.image + '.jpg');
    var offset = this.overlayOffset;
    return (
      <OverlayView {...this.props} position={destination.loc} mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET} getPixelPositionOffset={offset}>
        <div className={'destination-overlay ' + destination.slug}>
          <div className='close-overlay' onClick={this.onCloseClick}>
            <i className='fa fa-close'></i>
          </div>
          <div className='destination-image' style={{backgroundImage: "url('"+ backgroundImage + "')"}} />
          <div className='destination-overlay-inner'>
            <div className='destination-header'>
              <span className='name'>
                {destination.name}
              </span>
              <span className='airport'>
                {destination.airportName}
              </span>
            </div>
            {this.renderBlurb()}
            {this.renderFooter()}

          </div>
        </div>
      </OverlayView>
    );
  }
})

module.exports = DestinationOverlay;