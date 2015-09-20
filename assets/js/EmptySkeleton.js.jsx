var React = require('react');
var Router = require('react-router');
var DocumentTitle = require('react-document-title');

var Footer = require('./components/shared/Footer.js.jsx');

var EmptySkeleton = React.createClass({

  render: function() {
    return (
      <DocumentTitle title='Private Air Travel Membership | Surf Air'>
        <div>
          <div className='content-wrapper'>
            {this.props.children}
          </div>
        </div>
      </DocumentTitle>
    );
  }

});

module.exports = EmptySkeleton;