import React from 'react';
import Parse from 'parse';
import ParseReact from 'parse-react';

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
      <div className='patrons-list-container'>
        <ul className='patrons-list'>
          {this.data.patrons.map(function(patron) {
            return <PatronAvatar key={patron.objectId}
                                 patron={patron}
                                 selectPatronCallback={callback} />;
          })}
        </ul>
      </div>
    );

  }
});

export default PatronsList;