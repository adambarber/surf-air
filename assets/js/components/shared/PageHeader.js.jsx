require('../../../less/components/shared/_page_header.less');

var React = require('react');

var PageHeader = React.createClass({

  render: function() {
    var backgroundImage = require('../../../images/page-headers/' + this.props.image);
    return (
      <div className='page-header' style={{'backgroundImage': "url("+backgroundImage+")"}}>
        <div className='page-header-inner'>
          <h2 className='page-title'>{this.props.title}</h2>
          <p className='page-subhead'>{this.props.subhead}</p>
        </div>
      </div>
    );
  }

});

module.exports = PageHeader;