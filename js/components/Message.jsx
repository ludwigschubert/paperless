import React from 'react';
import Time from 'react-time'
import { Image, Col, Row } from 'react-bootstrap';

import MessageTaskSuggestion from './MessageTaskSuggestion.jsx';

let Message = React.createClass({

  render() {
    const message = this.props.message;
    const patron  = this.props.patron;

    var text;
    if (message.text) {
      text = <div className="message-text"><span>{message.text}</span></div>;
    }

    var image;
    if (message.imageUrl) {
      image = <Row>
        <Col sm={6}>
          <Image rounded responsive className="message-image" src={message.imageUrl} />
        </Col>
      </Row>
    }

    var taskSuggestion;
    if (!message.isReply) {
      if (message.text.indexOf("apply") > -1) {
        taskSuggestion = <MessageTaskSuggestion task="apply" patron={patron} />
      } else if (message.text.indexOf("renew") > -1) {
        taskSuggestion = <MessageTaskSuggestion task="renew" patron={patron} />
      }
    }
    
    const messageClass = message.isReply ? "message-reply" : "message-incoming";

    return(
      <div className={"message " + messageClass}>
        <div className="message-timestamp">
          <Time value={message.createdAt} titleFormat="YYYY/MM/DD HH:mm:ss" relative />
        </div>
        {text}
        {image}
        {taskSuggestion}
      </div>
    );

  }
});

export default Message;