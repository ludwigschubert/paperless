import React from 'react';
import Parse from 'parse';
import ParseReact from 'parse-react';

import MessagesList from './MessagesList.jsx';
import PatronDetails from './PatronDetails.jsx';

let PatronCard = React.createClass({

  render() {
    const patron = this.props.patron;
    return(
      <div className='patron-card'>
        <MessagesList patron={patron}/>
        <PatronDetails patron={patron}/>
      </div>
    );

  }
});

export default PatronCard;