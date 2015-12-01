import React from 'react';

import { Col } from 'react-bootstrap';

let MessagesHeading = React.createClass({

  render() {
    const patron = this.props.patron;
    return(
      <Col sm={12} className="messages-header">
        <span className="patron-name">
          {patron.name}
        </span>
        <span className="patron-phoneNumber">
          {patron.phoneNumber}
        </span>
      </Col>
    );

  }
});

export default MessagesHeading;