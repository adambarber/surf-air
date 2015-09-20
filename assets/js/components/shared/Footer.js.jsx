require('../../../less/components/_footer.less');

var React = require('react');
var Router = require('react-router');

var Footer = React.createClass({

  render: function() {
    return (
      <footer>
        <div className='footer-nav-wrapper'>
          <nav className='footer-primary-nav'>
            <Router.Link to='/'>About Us</Router.Link>
            <Router.Link to='/'>Careers</Router.Link>
            <Router.Link to='/'>Contact Us</Router.Link>
            <Router.Link to='/'>Partners</Router.Link>
            <Router.Link to='/'>Press</Router.Link>
            <Router.Link to='/'>Legal</Router.Link>
            <Router.Link to='/'>Privacy</Router.Link>
            <Router.Link to='/'>Terms</Router.Link>
            <Router.Link to='/'>Blog</Router.Link>
          </nav>

          <nav className='footer-social-nav'>
            <a className='social-link facebook' href='http://www.facebook.com/surfair' target="_blank">
              <i className='fa fa-facebook'></i>
            </a>

            <a className='social-link twitter' href='http://www.twitter.com/surfair' target="_blank">
              <i className='fa fa-twitter'></i>
            </a>

            <a className='social-link youtube' href='https://www.youtube.com/c/surfair' target="_blank">
              <i className='fa fa-youtube'></i>
            </a>

            <a className='social-link instagram' href='http://www.instagram.com/surfair' target="_blank">
              <i className='fa fa-instagram'></i>
            </a>

            <a className='social-link linkedin' href='https://www.linkedin.com/company/surfair' target="_blank">
              <i className='fa fa-linkedin'></i>
            </a>
          </nav>

        </div>
        <div className='footer-copyright'>
          <p>© {new Date().getFullYear()} Surf Airlines, Inc</p>
          <p>
            <a href='tel:+18003656179'>
              <i className='fa fa-phone'></i>(800) 365-6179
            </a>
          </p>
        </div>
      </footer>
    );
  }

});

module.exports = Footer;