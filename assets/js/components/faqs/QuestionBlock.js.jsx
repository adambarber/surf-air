require('../../../less/components/faqs/_question_block.less');

var React = require('react');

var QuestionBlock = React.createClass({

  render: function() {
    return (
      <div className='question-block'>
        <div className='question-block-inner'>
          <h3 className='question'>{this.props.question}</h3>
          <div className='answer'>{this.props.children}</div>
        </div>
      </div>
    );
  }

});

module.exports = QuestionBlock;