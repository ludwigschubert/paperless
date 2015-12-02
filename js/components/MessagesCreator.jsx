import React from 'react';
import Parse from 'parse';
import ParseReact from 'parse-react';
import LinkedStateMixin from 'react-addons-linked-state-mixin';
import PUBNUP from 'pubnub';
import PostalReactMixin from '../vendor/postal-react-mixin.js';

import { Col, Input, Button } from 'react-bootstrap';

let MessagesCreator = React.createClass({
  mixins: [LinkedStateMixin, PostalReactMixin],

  getInitialState() {
    return { text: '' };
  },

  componentWillMount: function() {
    this.subscribe('messageSuggestion', function(data) {
      this.setState({text: data.text});
    });
  },

  // onEvents: {
  //     taskSuggestion: function(event){
  //         console.log("test");
  //         const suggestion = event.detail;
  //         var text;
  //         switch (suggestion) {
  //           case "apply":
  //               text = "Hi " + this.props.patron.name + "! Sure, we can help you renew your driver license. First, can you send us an image of your current driver license?";
  //             break;
  //           case "renew":
  //               text = "Hi " + this.props.patron.name + "! It looks to us like you already have a driver license. Maybe you have lost it or you need a renewal?";
  //             break;
  //         }
  //         this.setState({text: text});
  //     }
  // },

  _sendMessage: function() {
    const element = document.getElementById("messages-creator-input");
    const text = element.value;
    ParseReact.Mutation.Create('Message', {
      text: text,
      patron: this.props.patron,
      isReply: true
    }).dispatch();

    this.setState({ text: '' });

    return false;
  },

  _validationState: function() {
    let length = this.state.text.length;
    if (length > 0) return 'success';
    else            return null;
  },

  render() {
    const innerButton = <Button onClick={this._sendMessage}>Send</Button>;

    return(
      <Col sm={12} className="messages-creator-container">
        <form onSubmit={this._sendMessage}>
          <Input
            id="messages-creator-input"
            type="text"
            placeholder={"Message to " + this.props.patron.name }
            ref="input"
            valueLink={this.linkState('text')}
            bsStyle={this._validationState()}
            buttonAfter={innerButton} />
        </form>
      </Col>
    );

  }
});

export default MessagesCreator;