import React from 'react';
import Parse from 'parse';
import ParseReact from 'parse-react';
import { Row, Col } from 'react-bootstrap';

import PatronAvatar from './PatronAvatar.jsx';

let PatronsList = React.createClass({
  mixins: [ParseReact.Mixin], // Enable query subscriptions

  observe: function() {
    return {
      patrons: (new Parse.Query('Patron')).ascending('createdAt')
    };
  },

  render() {
    const callback = this.props.selectPatronCallback
    return(
      <Row className='patron-avatar-list-container'>
        <Col sm={12}>
          <ul className='patron-avatar-list'>
            {this.data.patrons.map(function(patron) {
              return <PatronAvatar key={patron.objectId}
                                   patron={patron}
                                   selectPatronCallback={callback} />;
            })}
          </ul>
        </Col>
      </Row>
    );

  }
});

export default PatronsList;