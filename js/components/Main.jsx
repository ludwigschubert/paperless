import React from 'react';

import PatronsList from './PatronsList.jsx';

let Main = React.createClass({

  render() {
    return(
      <div id="main">
        <PatronsList/>
        <PatronCard/>
      </div>
    );
  }
});

export default Main;