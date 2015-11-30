import React from 'react';
import Parse from 'parse';
import ParseReact from 'parse-react';

import { Col } from 'react-bootstrap';
import Message from './Message.jsx'

let MessagesList = React.createClass({
  mixins: [ParseReact.Mixin], // Enable query subscriptions

  observe: function() {
    return {
      messages: (new Parse.Query('Message')).equalTo('patron', this.props.patron).ascending('createdAt')
    };
  },

  render() {
    return(
      <Col sm={6} className="messages-list-container">
        {this.data.messages.map( function(message) {
          return <Message key={message.objectId} message={message}/>;
        })}
      </Col>
    );

  }
});

export default MessagesList;