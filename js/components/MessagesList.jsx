import React from 'react';
import Parse from 'parse';
import ParseReact from 'parse-react';
import PUBNUP from 'pubnub';

import { Col } from 'react-bootstrap';
import Message from './Message.jsx'

let MessagesList = React.createClass({
  mixins: [ParseReact.Mixin], // Enable query subscriptions

  observe: function(props, state) {
    return {
      messages: (new Parse.Query('Message')).equalTo('patron', props.patron).ascending('createdAt')
    };
  },

  componentDidMount: function() {
    const pubnub = PUBNUB({
        publish_key   : 'pub-c-a0daec15-afc0-4588-9b0a-e419807f5882',
        subscribe_key : 'sub-c-17e1a790-9737-11e5-b829-02ee2ddab7fe'
    })
    const component = this;
    pubnub.subscribe({
        channel : "new-message",
        message : function(message,env,ch,timer,magic_ch){
          const messageId = JSON.stringify(message);
          console.log("PubNub message received; new message(" + messageId.substr(1, messageId.length -2) + ")"); // gets rid of quotes
          component.refreshQueries('messages');
        },
        connect: function() {
          console.log("...subscribed to PubNub new-message channels.")
        }
    });
  },

  componentDidUpdate: function() {
    var element = document.getElementById("messages-list-container");
    element.scrollTop = element.scrollHeight;
  },

  render() {
    return(
      <Col sm={12} className="messages-list-container" id="messages-list-container">
        {this.data.messages.map( function(message) {
          return <Message key={message.objectId || "new"} message={message}/>;
        })}
      </Col>
    );

  }
});

export default MessagesList;