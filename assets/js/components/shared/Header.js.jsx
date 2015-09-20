require('../../../less/components/_header.less');

var React = require('react');
var Router = require('react-router');
var IndexLink = require('react-router/lib/IndexLink');

var Header = React.createClass({
  onLinkClick: function() {
    this.setState({showMobileMenu: false})
  },
  toggleMobileMenu: function() {
    this.setState({showMobileMenu: !this.state.showMobileMenu})
  },
  getInitialState: function() {
    return {
      showMobileMenu: false
    };
  },
  render: function() {
    var headerClasses = this.state.showMobileMenu ? 'expand-mobile-header' : '';
    var menuClasses = this.state.showMobileMenu ? 'header-nav mobile-nav-visible' : 'header-nav';
    return (
      <header className={headerClasses}>
        <IndexLink to="/" className='logo'>
          <h1>SurfAir</h1>
        </IndexLink>


        <nav className={menuClasses}>
          <div className='pull-left primary-nav' onClick={this.onLinkClick}>
            <Router.Link to='/how-it-works/' activeClassName="active">How It Works</Router.Link>
            <Router.Link to='/destinations/' activeClassName="active">Destinations</Router.Link>
            <Router.Link to='/travel-info/' activeClassName="active">Travel Info</Router.Link>
            <Router.Link to='/faqs/' activeClassName="active">Frequently Asked Questions</Router.Link>
          </div>

          <div className='pull-right' onClick={this.onLinkClick}>
            <Router.Link to='/log-in/' className='log-in' activeClassName="active">Log In</Router.Link>
            <Router.Link to='/join-us/' className='join-us' activeClassName="active">Become A Member</Router.Link>
          </div>

          <i className={'fa fa-close close-mobile-menu hide-on-desktop'} onClick={this.toggleMobileMenu}></i>
        </nav>
        <i className='fa fa-bars toggle-mobile-menu hide-on-desktop' onClick={this.toggleMobileMenu}></i>

      </header>
    );
  }

});

module.exports = Header;