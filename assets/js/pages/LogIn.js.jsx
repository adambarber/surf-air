require('../../less/modules/forms.less');
require('../..//less/components/login/_login_page_content.less');
require('../../less/modules/background_video.less');


var Logo = require('../../images/logo-white.png');

var React = require('react');
var Router = require('react-router');
var DocumentTitle = require('react-document-title');

var VideoMp4 = require('../../videos/surfair-slow.mp4');
var VideoWebm = require('../../videos/surfair-slow.webm');

var LogIn = React.createClass({
  onSubmit: function(e) {
    e.preventDefault();
  },
  render: function() {
    var pageTitle = 'Log In To Your Account';
    return (
      <DocumentTitle title='Log In To Your Account | Surf Air'>
          <div className='background-video-content-wrapper'>
            <div className='background-video-content login-page-content'>

              <div className='login-form-header'>
                <Router.Link to='/'>
                  <img src={Logo} />
                </Router.Link>
              </div>

              <div className='login-form-wrapper'>
                <form className='login-form' onSubmit={this.onSubmit}>
                  <div className='inputs-wrapper'>
                    <div className='input-wrapper half-width'>
                    <i className='fa fa-envelope'></i>
                      <input type='email' name='email' ref='email-input' placeholder='Your Email Address' />
                    </div>

                    <div className='input-wrapper half-width'>
                      <i className='fa fa-lock'></i>
                      <input type='password' name='password' ref='password-input' placeholder='Your Password'/>
                    </div>
                  </div>

                  <div className='input-wrapper submit-wrapper full-width'>
                    <input type='submit' className='submit-button button' value='Log In' />
                  </div>
                </form>
              </div>

              <div className='form-footer-links'>
                <Router.Link to='/'>Back To Surfair.com</Router.Link>
                <Router.Link to='/forgot-password'>Forgot Password</Router.Link>
                <Router.Link to='/join-us'>Become A Surf Air Member</Router.Link>
              </div>
            </div>

            <video autoPlay={true} loop="loop" className='background-video'>
              <source src={VideoWebm} type='video/webm' />
              <source src={VideoMp4} type='video/mp4'/>
            </video>
          </div>
      </DocumentTitle>
    );
  }

});

module.exports = LogIn;