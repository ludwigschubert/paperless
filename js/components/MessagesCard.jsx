import React from 'react';
import Parse from 'parse';
import ParseReact from 'parse-react';
import { Col, Row } from 'react-bootstrap';

import MessagesList from './MessagesList.jsx';
import MessagesCreator from './MessagesCreator.jsx';


let MessagesCard = React.createClass({

  render() {
    const patron = this.props.patron;
    return(
      <Col sm={6} className='messages-list'>
        <Row> <MessagesList patron={patron}/> </Row>
        <Row> <MessagesCreator patron={patron}/> </Row>
      </Col>
    );

  }
});

export default MessagesCard;