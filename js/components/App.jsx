import React from 'react';
// import { Link } from 'react-router';

// Simply render all children
export default React.createClass({
  render: function() {
    return React.cloneElement(this.props.children);
  }
});