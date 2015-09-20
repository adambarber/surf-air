require('../../../less/components/home/_home_hero.less');

var React = require('react');
var Router = require('react-router');


var HomeHero = React.createClass({
  render: function() {
    return (
      <div className='home-hero'>
        <div className='home-hero-inner'>
          <h2 className='headline'>Air Without The Lines</h2>
          <p className='subhead'>
            Unlimited Private Travel From $1,750 Per Month
          </p>

            <div className='home-hero-cta'>
              <Router.Link to='/join-us/' className='button'>Become A Surf Air Member</Router.Link>
            </div>
        </div>

      </div>
    );
  }

});

module.exports = HomeHero;