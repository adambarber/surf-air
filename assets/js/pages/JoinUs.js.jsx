require('../../less/components/join-us/_join_us_content_wrapper.less');

var React = require('react');
var Router = require('react-router');
var DocumentTitle = require('react-document-title');
var PageHeader = require('../components/shared/PageHeader.js.jsx');

var Logo = require('../../images/logo-blue.png');


var JoinUsForm = require('../components/join-us/JoinUsForm.js.jsx');

var JoinUs = React.createClass({
  render: function() {
    var pageTitle = 'Join Surf Air';
    var pageSubHead = 'Become A Member and Change How You Travel Forever'
    return (
      <DocumentTitle title='Become A Surf Air Member Today | Surf Air'>
        <div>
          <PageHeader title={pageTitle} subhead={pageSubHead} image='header11.jpg' />
          <div className='join-us-content-wrapper'>


          <div className='join-us-form-header'>

            <div className='join-us-form-header-text'>
              Surf Air was created for frequent flyers by frequent flyers.
              Look forward to 30-second booking, unlimited flights, easy-to-access
              local airports, and an engaging community. This is how flying should be.
              Questions? Call <a href='tel:+18887042582,5'>1.888.704.2582 x5</a>
            </div>
          </div>

          <JoinUsForm />
        </div>
        </div>
      </DocumentTitle>
    );
  }

});

module.exports = JoinUs;