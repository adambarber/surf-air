require('../../less/components/shared/_two_column_wrapper.less');

var React = require('react');
var Router = require('react-router');
var DocumentTitle = require('react-document-title');

var PageHeader = require('../components/shared/PageHeader.js.jsx');
var HomeCallToAction = require('../components/home/HomeCallToAction.js.jsx');
var TopicList = require('../components/shared/TopicList.js.jsx');

var TravelInfo = React.createClass({
  render: function() {
    var pageTitle = 'Travel Info'
    var pageSubHead = 'What To Expect With Your New Membership'
    return (
      <DocumentTitle title='Travel Info | Surf Air'>
        <div>
          <PageHeader title={pageTitle} subhead={pageSubHead} image='header2.jpg' />

          <div className='travel-info-content-wrapper two-column-wrapper'>
            <TopicList>
              <Router.Link to='/travel-info/routes/' activeClassName="active">Routes and Airports</Router.Link>
              <Router.Link to='/travel-info/reservations/' activeClassName="active">Reservations</Router.Link>
              <Router.Link to='/travel-info/experience/' activeClassName="active">In Flight Experience</Router.Link>
            </TopicList>
            {this.props.children}
          </div>

          <HomeCallToAction />
        </div>
      </DocumentTitle>
    );
  }

});

module.exports = TravelInfo;