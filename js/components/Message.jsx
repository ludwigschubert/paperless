import React from 'react';
import { Image, Col, Row } from 'react-bootstrap';

let Message = React.createClass({

  render() {
    const message = this.props.message;

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

    const messageClass = message.isReply ? "message-reply" : "message-incoming";

    return(
      <div className={"message " + messageClass}>
        <div className="message-timestamp">
          {message.createdAt.toString()}
        </div>
        {text}
        {image}
      </div>
    );

  }
});

export default Message;