var React = require('react');
var Formsy = require('formsy-react');

var TextInput = React.createClass({
  getValue: function() {

  },
  changeValue: function (event) {
    this.setValue(event.currentTarget.value);
  },
  getDefaultProps: function() {
    return {
      type: 'text'
    };
  },
  render: function() {
    var message = this.props.message;
    var errorMessage = '';
    var className = '';
    var labelText = this.props.label;
    return (
      <div className={'input-wrapper ' + className}>
        <label htmlFor={this.props.name}>{labelText}</label>
        <input type={this.props.type} name={this.props.name} placeholder={this.props.placeHolder} onChange={this.changeValue} value={this.getValue()}/>
        {message ? <span className='message'>{message}</span>: ''}
        {errorMessage ? <span className='error-message'>{errorMessage}</span> : '' }
      </div>
    );
  }

});

module.exports = TextInput;