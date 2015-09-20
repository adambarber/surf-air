var React = require('react/addons');

var HomeLogo = React.createClass({
  mixins: [React.addons.PureRenderMixin],
  render: function() {
    var logoImage = require('../../../images/press-logos/' + this.props.image);
    return (
      <div className={'home-logo ' + this.props.name}>
        <img src={logoImage} alt={"Surf Air featured in " + this.props.name} />
      </div>
    );
  }

});

module.exports = HomeLogo;