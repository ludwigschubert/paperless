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
    
    return false;
  },

  render() {
    const innerButton = <Button onClick={this._sendMessage} >Send</Button>;

    return(
      <Col sm={12} className="messages-creator-container">
        <form onSubmit={this._sendMessage}>
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