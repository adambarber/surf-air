require('../../../less/components/home/_home_call_to_action.less')
var React = require('react/addons');
var Router = require('react-router');

var HomeCallToAction = React.createClass({
  mixins: [React.addons.PureRenderMixin],
  render: function() {
    return (
      <div className='home-call-to-action'>
        <div className='home-call-to-action-inner'>
          <div className='home-call-to-action-text'>
            <h3>Change How You Travel Forever</h3>
            <p>Becoming a Surf Air member takes just a few minutes.</p>
          </div>
          <Router.Link to='join-us' className='home-call-to-action-button'>Become A Surf Air Member</Router.Link>
        </div>
      </div>
    );
  }

});

module.exports = HomeCallToAction;