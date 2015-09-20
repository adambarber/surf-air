require('../../../less/components/home/_home_logos.less');
var React = require('react/addons');
var HomeLogo = require('./HomeLogo.js.jsx');

var HomeLogos = React.createClass({
  mixins: [React.addons.PureRenderMixin],
  render: function() {
    return (
      <div className='home-logos'>
        <div className='home-logos-inner'>

          <div className='logos-list'>
            <HomeLogo name='Forbes' image='forbes.jpg' />
            <HomeLogo name='Wall Street Journal' image='wall-street-journal.jpg' />
            <HomeLogo name='Pando Daily' image='pandodaily.jpg' />
            <HomeLogo name='Gizmodo' image='gizmodo.jpg' />
          </div>
        </div>
      </div>
    );
  }

});

module.exports = HomeLogos;