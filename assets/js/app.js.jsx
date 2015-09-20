require('css-reset/reset.css');
require('../less/global.less');
require('font-awesome/less/font-awesome.less');
var createBrowserHistory =  require('history/lib/createBrowserHistory');
var React = require('react');
var RouterModule = require('react-router');
var Router = RouterModule.Router;
var Routes = require('./routes.js.jsx');

var history = createBrowserHistory();
var contentContainer = document.getElementById('content');
var router = <Router history={history}>{Routes}</Router>;
React.render(router, contentContainer)
