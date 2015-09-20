var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var AppSkeleton = require('./app-skeleton.js.jsx');
var EmptySkeleton = require('./EmptySkeleton.js.jsx');

var Pages = {
  Home: require('./pages/Home.js.jsx'),
  HowItWorks: require('./pages/HowItWorks.js.jsx'),
  Destinations: require('./pages/Destinations.js.jsx'),
  TravelInfo: {
    Main: require('./pages/TravelInfo.js.jsx'),
    RoutesTravelInfo: require('./pages/travel-info/RoutesTravelInfo.js.jsx'),
    ReservationsTravelInfo: require('./pages/travel-info/ReservationsTravelInfo.js.jsx'),
    ExperienceTravelInfo: require('./pages/travel-info/ExperienceTravelInfo.js.jsx')
  },
  LogIn: require('./pages/LogIn.js.jsx'),
  JoinUs: require('./pages/JoinUs.js.jsx'),
  ForgotPassword: require('./pages/ForgotPassword.js.jsx'),
  FAQs: {
    Main: require('./pages/FAQ.js.jsx'),
    Membership: require('./pages/faqs/MembershipFaqs.js.jsx'),
    Security: require('./pages/faqs/SecurityFaqs.js.jsx'),
    Growth: require('./pages/faqs/GrowthFaqs.js.jsx'),
    Careers: require('./pages/faqs/CareersFaqs.js.jsx')
  }
}

var Routes = (
  <Route>
    <Route component={EmptySkeleton}>
      <Route path='join-us' component={Pages.JoinUs} />
      <Route path='log-in' name='log-in' component={Pages.LogIn} />
      <Route path='forgot-password' name='forgot-password' component={Pages.ForgotPassword} />
    </Route>

    <Route path="/" component={AppSkeleton}>
      <Route path='how-it-works' component={Pages.HowItWorks} />
      <Route path='destinations' component={Pages.Destinations}>
        <Route path=':destination' component={Pages.Destinations} />
      </Route>

      <Router.Redirect from="/travel-info" to="/travel-info/routes/" />
      <Route path='travel-info/' component={Pages.TravelInfo.Main} ignoreScrollBehavior>
        <Route path='routes/' component={Pages.TravelInfo.RoutesTravelInfo} />
        <Route path='reservations' component={Pages.TravelInfo.ReservationsTravelInfo} />
        <Route path='experience' component={Pages.TravelInfo.ExperienceTravelInfo} />
      </Route>


      <Router.Redirect from="/faqs" to="/faqs/membership/" />
      <Route path='faqs' component={Pages.FAQs.Main} ignoreScrollBehavior>
        <Route path='membership' component={Pages.FAQs.Membership} />
        <Route path='security' component={Pages.FAQs.Security} />
        <Route path='growth' component={Pages.FAQs.Growth} />
        <Route path='careers' component={Pages.FAQs.Careers} />
      </Route>

      <Router.IndexRoute component={Pages.Home}/>
    </Route>


  </Route>
);

module.exports = Routes;