var addressbar = require('addressbar');
var React = require('react');

module.exports = React.createClass({
  propTypes: {
    onChange: React.PropTypes.func.isRequired,
    value: React.PropTypes.string.isRequired
  },
  componentWillMount: function () {
    addressbar.on('change', this.onUrlChange);
  },
  componentWillUnmount: function () {
    addressbar.off('change', this.onUrlChange);
  },
  componentDidUpdate: function () {
    addressbar.value = this.props.value;
  },
  componentDidMount: function () {
    addressbar.value = this.props.value;
  },
  onUrlChange: function (event) {
    if (this.props.onlyHash && event.target.value.indexOf('#') === -1) {
      return;
    }
    event.preventDefault();
    this.props.onChange(event.target.value);
  },
  render: function () {
    return null;
  }
});
