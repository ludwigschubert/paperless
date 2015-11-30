import React from 'react';
import Parse from 'parse';
import ParseReact from 'parse-react';
import { Row } from 'react-bootstrap';

import MessagesList from './MessagesList.jsx';
import PatronDetails from './PatronDetails.jsx';

let PatronCard = React.createClass({

  render() {
    const patron = this.props.patron;
    return(
      <Row className='patron-card'>
        <MessagesList patron={patron}/>
        <PatronDetails patron={patron}/>
      </Row>
    );

  }
});

export default PatronCard;