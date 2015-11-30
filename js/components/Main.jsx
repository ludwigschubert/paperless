import React from 'react';

import PatronsList from './PatronsList.jsx';

let Main = React.createClass({

  render() {
    return(
      <div id="main">
        Welcome to Main
        <PatronsList/>
      </div>
    );
  }
});

export default Main;