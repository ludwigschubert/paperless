import React from 'react';
import { Tooltip, OverlayTrigger, Image } from 'react-bootstrap';

let PatronAvatar = React.createClass({

  selectPatron: function() {
    this.props.selectPatronCallback(this.props.patron);
  },

  render() {
    const patron = this.props.patron;

    const tooltip = (
      <Tooltip id={patron.objectId}><strong>{patron.name}</strong></Tooltip>
    );

    return(
      <li className='patron-avatar-list-item' onClick={this.selectPatron}>
        <OverlayTrigger placement="bottom" overlay={tooltip}>
          <Image circle responsive className='patron-avatar-image' src={patron.avatarUrl}/>
        </OverlayTrigger>
      </li>
    );

  }
});

export default PatronAvatar;