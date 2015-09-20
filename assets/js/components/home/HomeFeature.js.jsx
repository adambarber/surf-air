var React = require('react/addons');
var HomePageActions = require('../../actions/HomePageActions.js');

var HomeFeature = React.createClass({
  mixins: [React.addons.PureRenderMixin],
  onClick: function() {
    HomePageActions.scrollToFeature(this.props.slug)
  },
  render: function() {
    return (
      <div className='home-feature' onClick={this.onClick}>
        <div className='home-feature-inner'>
          <h3 className='feature-name'>{this.props.name}</h3>
          <p className='feature-subhead'>{this.props.subhead}</p>
        </div>
      </div>
    );
  }

});

module.exports = HomeFeature;