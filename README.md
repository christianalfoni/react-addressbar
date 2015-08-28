# react-addressbar
Take control of the addressbar in a reactive way

This component depends on [addressbar](https://github.com/christianalfoni/addressbar), a library that makes the addressbar work like an input. This means that you can work with the addressbar just like you do with a normal input. Typically you would combine this with something like [url-mapper](https://github.com/christianalfoni/url-mapper) to create your own flexible and custom routing logic.

`npm install react-addressbar`

```js
var React = require('react');
var Addressbar = require('react-addressbar');

var Test = React.createClass({
  getInitialState: function () {
    return {
      url: '/'
    };
  },
  onChange: function (url) {
    this.setState({
      url: url
    });
  },
  render: function () {
    return (
      <div>
        <Addressbar onChange={this.onChange} value={this.state.url}/>
        <h1>Hello!</h1>
        <a href="/foo">foo</a> <a href="/bar">bar</a>
      </div>
    );
  }
});

React.render(<Test/>, document.body);
```

When addressbar is used it will by default take full control of the addressbar. If you only want to take control of hash changes, use `onlyHash` as a property.
