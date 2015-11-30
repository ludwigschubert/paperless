import React from 'react';

let MessagesList = React.createClass({

  render() {
    return(
      <p>
      {this.props.patron.name}s MESSAGES LIST
      </p>
    );

  }
});

export default MessagesList;