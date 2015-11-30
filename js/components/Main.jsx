import React from 'react';

import PatronsList from './PatronsList.jsx';
import PatronCard from './PatronCard.jsx';

let Main = React.createClass({

  getInitialState: function() {
    return {selectedPatron: null};
  },

  _selectPatron: function(patron) {
    this.setState({selectedPatron: patron});
  },

  render() {
    const selectedPatron = this.state.selectedPatron;

    var mainBody;
    if (selectedPatron) {
      mainBody = <PatronCard patron={selectedPatron}/>
    } else {
      mainBody = <p>No Patron Selected</p>
    }

    return(
      <div id="main">
        <PatronsList selectPatronCallback={this._selectPatron} selectedPatron={selectedPatron}/>
        {mainBody}
      </div>
    );
  }
});

export default Main;