require('../../../less/components/home/_home_features.less');

var React = require('react/addons');
var HomeFeature = require('./HomeFeature.js.jsx');
var HomePageActions = require('../../actions/HomePageActions.js');

var HomeFeatures = React.createClass({
  mixins: [React.addons.PureRenderMixin],
  render: function() {
    var containerClassName = this.props.sticky ? 'home-features sticky ' + this.props.selectedFeature : 'home-features';
    var spacerClassName = this.props.sticky ? 'home-features-spacer sticky' : 'home-features-spacer';
    var selectorClassName = this.props.selectedFeature ? 'home-features-selector ' + this.props.selectedFeature : 'home-features-selector';
    return (
      <div>
        <div className={containerClassName} ref='container'>
          <div className='home-features-inner'>
            <HomeFeature name='Simple' slug='simple' subhead='All You Can Fly'/>
            <HomeFeature name='Easy' slug='easy' subhead='Book Right From Your Phone' />
            <HomeFeature name='Fast' slug='fast' subhead='No Lines or Waits' />
            <HomeFeature name='Convenient' slug='convenient' subhead='90 Flights A Day' />
          </div>
          <div className={selectorClassName} />
        </div>
        <div className={spacerClassName} />
      </div>
    );
  }

});

module.exports = HomeFeatures;