import React from 'react';

import PatronsList from './PatronsList.jsx';
import PatronBody from './PatronBody.jsx';

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
      mainBody = <PatronBody patron={selectedPatron}/>
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