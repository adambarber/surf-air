var express = require('express');
var ejs = require('ejs');

var React = require('react');
var Router = require('react-router');
var Routes = require('./dist/routes.server.js');
var createLocation = require('history/lib/createLocation');
var objectAssign = require('object-assign');

var match = Router.match;
var RoutingContext = Router.RoutingContext;

var app = express();
var port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use('/assets', express.static('dist'));

app.get('*', function(req, res) {
  var location = createLocation(req.url)
  match({routes: Routes, location: location}, function(error, redirectLocation, renderProps) {
    var handler = React.createElement(RoutingContext, objectAssign({}, renderProps));
    var content = React.renderToString(handler);
    res.render('index', {content: content})
  })
});

var server = app.listen(port, function() {
  console.log('Server running on port ' + port);
});
