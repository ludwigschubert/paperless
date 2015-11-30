import React from 'react';
import { Grid } from 'react-bootstrap';

let App = React.createClass({

  render() {
    return(
      <Grid fluid>
        {React.cloneElement(this.props.children)}
      </Grid>
    );
  }

});

export default App;
