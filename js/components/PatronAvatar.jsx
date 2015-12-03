import React from 'react';
import { Tooltip, OverlayTrigger, Image } from 'react-bootstrap';
import classNames from 'classnames';

let PatronAvatar = React.createClass({

  selectPatron: function() {
    if (this.props.isSelected) {
      this.props.selectPatronCallback(null);
    } else {
      this.props.selectPatronCallback(this.props.patron);
    }
  },

  render() {
    const patron = this.props.patron;

    const tooltip = <Tooltip id={patron.objectId}><strong>{patron.name || "Unknown Patron"}</strong></Tooltip>;

    const liClass = classNames({
      'patron-avatar-list-item': true,
      'selected': this.props.isSelected
    });

    return(
      <li className={liClass} onClick={this.selectPatron}>
        <OverlayTrigger placement="bottom" overlay={tooltip}>
          <Image circle responsive className='patron-avatar-image' src={patron.avatarUrl || require('../../img/patron@2x.png')}/>
        </OverlayTrigger>
      </li>
    );

  }
});

export default PatronAvatar;