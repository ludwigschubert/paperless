import React from 'react';
import Parse from 'parse';
import ParseReact from 'parse-react';
import LinkedStateMixin from 'react-addons-linked-state-mixin';
import PUBNUP from 'pubnub';

import { Col, Input, Button } from 'react-bootstrap';

let MessagesCreator = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState() {
    return { text: '' };
  },

  _sendMessage: function() {
    ParseReact.Mutation.Create('Message', {
      text: this.state.text,
      patron: this.props.patron,
      isReply: true
    }).dispatch();

    this.setState({ text: '' });
  },

  // mixins: [ParseReact.Mixin], // Enable query subscriptions

  // observe: function() {
  //   return {
  //     messages: (new Parse.Query('Message')).equalTo('patron', this.props.patron).ascending('createdAt')
  //   };
  // },
  //
  // componentDidMount: function() {
  //   const pubnub = PUBNUB({
  //       publish_key   : 'pub-c-a0daec15-afc0-4588-9b0a-e419807f5882',
  //       subscribe_key : 'sub-c-17e1a790-9737-11e5-b829-02ee2ddab7fe'
  //   })
  //   const component = this;
  //   pubnub.subscribe({
  //       channel : "new-message",
  //       message : function(message,env,ch,timer,magic_ch){
  //         const messageId = JSON.stringify(message);
  //         console.log("PubNub message received; new message(" + messageId.substr(1, messageId.length -2) + ")"); // gets rid of quotes
  //         component.refreshQueries('messages');
  //       },
  //       connect: function() {
  //         console.log("...subscribed to PubNub new-message channels.")
  //       }
  //   });
  // },

  render() {
    const innerButton = <Button onClick={this._sendMessage} >Send</Button>;

    return(
      <Col sm={12} className="messages-creator-container">
        <form>
          <Input
            type="text"
            placeholder={"Message to " + this.props.patron.name }
            ref="input"
            valueLink={this.linkState('text')}
            buttonAfter={innerButton} />
        </form>
      </Col>
    );

  }
});

export default MessagesCreator;