require('../../less/components/shared/_two_column_wrapper.less');

var React = require('react');
var Router = require('react-router');

var DocumentTitle = require('react-document-title');
var PageHeader = require('../components/shared/PageHeader.js.jsx');
var HomeCallToAction = require('../components/home/HomeCallToAction.js.jsx');
var TopicList = require('../components/shared/TopicList.js.jsx');

var FAQ = React.createClass({
  render: function() {
    var pageTitle = 'Frequently Asked Questions';
    var pageSubHead = 'Unsure about what to expect your first time flying private?'
    return (
      <DocumentTitle title='Frequently Asked Questions | Surf Air'>
        <div>
          <PageHeader title={pageTitle} subhead={pageSubHead} image='header8.jpg' />

          <div className='faq-content-wrapper two-column-wrapper'>
            <TopicList>
              <Router.Link to='/faqs/membership/' activeClassName="active">Membership</Router.Link>
              <Router.Link to='/faqs/security/' activeClassName="active">Security</Router.Link>
              <Router.Link to='/faqs/growth/' activeClassName="active">Growth and Expansion</Router.Link>
              <Router.Link to='/faqs/careers/' activeClassName="active">Careers</Router.Link>
            </TopicList>
            {this.props.children}
          </div>

          <HomeCallToAction />
        </div>
      </DocumentTitle>
    );
  }

});

module.exports = FAQ;