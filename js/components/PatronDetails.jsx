import React from 'react';

let PatronDetails = React.createClass({

  render() {
    return(
      <p>
        {this.props.patron.name}s PATRON DETAILS
      </p>
    );

  }
});

export default PatronDetails;