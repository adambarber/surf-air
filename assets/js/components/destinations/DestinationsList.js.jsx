require('../../../less/components/destinations/_destinations_list.less');

var React = require('react/addons');
var Destination = require('./Destination.js.jsx');

var DestinationsList = React.createClass({
  mixins: [
    React.addons.PureRenderMixin
  ],
  onDestinationClick: function(destination) {
    this.props.onDestinationClick(destination)
  },
  renderDestinations: function() {
    var _self = this;
    var selectedDestination = _self.props.selectedDestination;
    return this.props.destinations.map(function(destination, idx) {
      var name = destination.name;
      var slug = destination.slug;
      var image = destination.image;
      return <Destination destination={destination} selectedDestination={selectedDestination} onDestinationClick={_self.onDestinationClick} key={'destination-' + slug}/>
    });
  },
  render: function() {
    return (
      <div className='destinations-list'>
        <div className='destinations-list-inner'>
          {this.renderDestinations()}
        </div>
      </div>
    );
  }

});

module.exports = DestinationsList;