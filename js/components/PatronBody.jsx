import React from 'react';
import Parse from 'parse';
import ParseReact from 'parse-react';
import { Row } from 'react-bootstrap';

import MessagesCard from './MessagesCard.jsx';
import PatronCard from './PatronCard.jsx';

let PatronBody = React.createClass({

  render() {
    const patron = this.props.patron;
    return(
      <Row className='patron-card'>
        <MessagesCard patron={patron}/>
        <PatronCard patron={patron}/>
      </Row>
    );

  }
});

export default PatronBody;