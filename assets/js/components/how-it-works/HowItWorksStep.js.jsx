var React = require('react/addons');

var HowItWorksStep = React.createClass({
  mixins: [React.addons.PureRenderMixin],
  onMouseEnter: function() {
    if(this.props.enableHover) {
      this.setState({hover: true })
    }
  },
  onMouseLeave: function() {
    if(this.props.enableHover) {
      this.setState({hover: false })
    }
  },
  getInitialState: function() {
    return {
      hover: false
    };
  },
  render: function() {
    var classes = this.state.hover ? 'how-it-works-step focused' : 'how-it-works-step';
    return (
      <div className={classes} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
        <div className='step-number'>
          <span className='step-number-inner'>
            {this.props.number}
          </span>
        </div>

        <div className='step-content'>
          <h3 className='step-name'>{this.props.name}</h3>

        <div className='step-text'>

          {this.props.children}


        </div>
        </div>
      </div>
    );
  }

});

module.exports = HowItWorksStep;