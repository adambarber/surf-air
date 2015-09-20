var React = require('react');
var Formsy = require('formsy-react');

var MultiSelectInput = React.createClass({
  mixins: [Formsy.Mixin],
  changeValue: function (event) {
    this.setValue(event.currentTarget.value);
  },
  getDefaultProps: function() {
    return {
      opts: [],
      defaultText: 'Please select an option...'
    };
  },
  getInitialState: function() {
    return {
      focused: false
    };
  },
  renderOptions: function() {
    if(this.props.opts) {
      return this.props.opts.map(function(option, idx) {
        return <option key={'select-option-' + idx} value={option}>{option}</option>
      });
    }
  },
  render: function() {
    var errorMessage = this.getErrorMessage();
    var className = this.showRequired() ? 'required' : this.showError() ? 'error' : null;
    return (
      <div className={'input-wrapper ' + className}>
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <select name={this.props.name} placeholder={this.props.placeHolder} onChange={this.changeValue} value={this.getValue()}>
          <option>{this.props.defaultText}</option>
          {this.renderOptions()}
        </select>
        {errorMessage ? <span>{errorMessage}</span> : '' }
      </div>
    );
  }

});

module.exports = MultiSelectInput;