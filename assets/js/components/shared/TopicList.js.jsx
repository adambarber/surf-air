require('../../../less/components/shared/_topic_list.less');

var React = require('react');
var TopicSelector = React.createClass({

  render: function() {
    return (
      <div className='faq-topic-list'>
        <div className='faq-topic-list-inner'>
          {this.props.children}
        </div>
      </div>
    );
  }

});

module.exports = TopicSelector;