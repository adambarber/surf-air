var React = require('react');
var Router = require('react-router');
var DocumentTitle = require('react-document-title');

var Header = require('./components/shared/Header.js.jsx');
var Footer = require('./components/shared/Footer.js.jsx');

var AppSkeleton = React.createClass({
  render: function() {
    return (
      <DocumentTitle title='Private Air Travel Membership | Surf Air'>
        <div>
          <Header />
          <div className='content-wrapper'>
            {this.props.children}
          </div>
          <Footer />
        </div>
      </DocumentTitle>
    );
  }
})

module.exports = AppSkeleton;