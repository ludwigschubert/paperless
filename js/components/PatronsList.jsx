import React from 'react';
import Parse from 'parse';
import ParseReact from 'parse-react';
import PUBNUP from 'pubnub';

import { Row, Col, Image } from 'react-bootstrap';

import PatronAvatar from './PatronAvatar.jsx';

let PatronsList = React.createClass({
  mixins: [ParseReact.Mixin], // Enable query subscriptions

  observe: function() {
    return {
      patrons: (new Parse.Query('Patron')).ascending('createdAt')
    };
  },

  componentDidMount: function() {
    const pubnub = PUBNUB({
        publish_key   : 'pub-c-a0daec15-afc0-4588-9b0a-e419807f5882',
        subscribe_key : 'sub-c-17e1a790-9737-11e5-b829-02ee2ddab7fe'
    })
    const component = this;
    pubnub.subscribe({
        channel : "new-patron",
        message : function(message,env,ch,timer,magic_ch){
          const patronId = JSON.stringify(message);
          console.log("PubNub message received; new patron (" + patronId.substr(1, messageId.length -2) + ")"); // gets rid of quotes
          component.refreshQueries('patrons');
        },
        connect: function() {
          console.log("...subscribed to PubNub new-patron channels.")
        }
    })
  },

  render() {
    const callback = this.props.selectPatronCallback
    const selectedPatron = this.props.selectedPatron
    return(
      <Row className='patron-avatar-list-container'>
        <Col sm={12}>
          <ul className='patron-avatar-list'>
            {this.data.patrons.map(function(patron) {
              return <PatronAvatar key={patron.objectId}
                                   patron={patron}
                                   selectPatronCallback={callback}
                                   isSelected={selectedPatron && selectedPatron.objectId == patron.objectId} />;
            })}
          </ul>
          <Image className="logo" src={require("../../img/logo@2x.png")} height="44" />
        </Col>
      </Row>
    );

  }
});

export default PatronsList;