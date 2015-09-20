var Reflux = require('reflux');
var HomePageActions = require('../actions/HomePageActions.js');

var isMasked = false;

var HomePageStore = Reflux.createStore({
  listenables: [HomePageActions],
  onScrollToFeature: function(slug) {
    isMasked = true
    this.trigger({ slug: slug, event: 'SCROLL-TO-FEATURE' })
  },
  onUnMaskFeature: function() {
    if(isMasked) {
      isMasked = false
      this.trigger({ event: 'UNMASK-FEATURE'})
    }
  }
});

module.exports = HomePageStore;