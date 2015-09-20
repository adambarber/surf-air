var React = require('react/addons');

var HomeFeatureSection = React.createClass({
  mixins: [
    React.addons.PureRenderMixin
  ],
  render: function() {
    var backgroundImage = require('../../../images/home-slider/' + this.props.bg);
    var containerStyle = {background: "url("+backgroundImage+") no-repeat"};
    var fadeClass = this.props.selectedFeature  === this.props.slug ? 'home-feature-fade visible' : 'home-feature-fade';
    return (
      <div className='home-feature-section' style={containerStyle} id={this.props.slug}>
        <div className={fadeClass} />
        <div className='home-feature-section-inner'>
          <div className='home-feature-header'>
            <h2 className='home-feature-name'>{this.props.name}</h2>
          </div>
          <div className='home-feature-copy'>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
})

module.exports = HomeFeatureSection;