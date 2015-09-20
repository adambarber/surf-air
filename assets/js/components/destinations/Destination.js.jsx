var React = require('react/addons');

var Destination = React.createClass({
  mixins: [
    React.addons.PureRenderMixin
  ],
  onClick: function() {
    this.props.onDestinationClick(this.props.destination)
  },
  render: function() {
    var classes = this.props.selectedDestination === this.props.destination.slug ? 'destination selected' : 'destination';
    return (
      <div className={classes} onClick={this.onClick}>
        <div className='destination-inner'>
          <div className='destination-name'>{this.props.destination.name}</div>
        </div>
      </div>
   );
  }
})


module.exports = Destination;