import React from 'react';
import { Col } from 'react-bootstrap';

let MessagesList = React.createClass({

  render() {
    return(
      <Col sm={6} className="messages-list-container">
      {this.props.patron.name}s MESSAGES LIST
      </Col>
    );

  }
});

export default MessagesList;