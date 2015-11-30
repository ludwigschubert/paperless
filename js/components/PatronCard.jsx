import React from 'react';
import { Col } from 'react-bootstrap';

let PatronCard = React.createClass({

  render() {
    return(
      <Col sm={6} className="patron-details">
        {this.props.patron.name}s PATRON DETAILS
      </Col>
    );

  }
});

export default PatronCard;